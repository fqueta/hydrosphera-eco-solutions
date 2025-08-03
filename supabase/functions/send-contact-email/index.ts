import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const brevoApiKey = Deno.env.get('BREVO_API_KEY');

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: ContactFormData = await req.json();
    
    console.log("Recebendo dados do formulário:", formData);

    // Preparar dados para o Brevo
    const emailData = {
      sender: {
        name: "HIDROSPHERA Consultoria",
        email: "noreply@hidrosphera.com"
      },
      to: [
        {
          email: "quetafernando1@gmail.com",
          name: "Fernando"
        }
      ],
      subject: `Novo contato: ${formData.subject}`,
      htmlContent: `
        <html>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
              <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
                Novo Contato - HIDROSPHERA
              </h2>
              
              <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="margin-top: 0; color: #1e40af;">Informações do Contato:</h3>
                <p><strong>Nome:</strong> ${formData.name}</p>
                <p><strong>Empresa:</strong> ${formData.company || 'Não informado'}</p>
                <p><strong>E-mail:</strong> ${formData.email}</p>
                <p><strong>Telefone:</strong> ${formData.phone || 'Não informado'}</p>
                <p><strong>Assunto:</strong> ${formData.subject}</p>
              </div>
              
              <div style="background-color: #fff; padding: 20px; border-left: 4px solid #2563eb; margin: 20px 0;">
                <h3 style="margin-top: 0; color: #1e40af;">Mensagem:</h3>
                <p style="white-space: pre-wrap;">${formData.message}</p>
              </div>
              
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; text-align: center; color: #64748b;">
                <p>E-mail enviado automaticamente pelo site da HIDROSPHERA</p>
                <p>Data: ${new Date().toLocaleString('pt-BR')}</p>
              </div>
            </div>
          </body>
        </html>
      `
    };

    // Enviar email via API do Brevo
    const brevoResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': brevoApiKey!
      },
      body: JSON.stringify(emailData)
    });

    if (!brevoResponse.ok) {
      const error = await brevoResponse.text();
      console.error('Erro no Brevo:', error);
      throw new Error(`Erro ao enviar email: ${brevoResponse.status}`);
    }

    const result = await brevoResponse.json();
    console.log("Email enviado com sucesso:", result);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Email enviado com sucesso!",
        messageId: result.messageId 
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );

  } catch (error: any) {
    console.error("Erro na função send-contact-email:", error);
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message || "Erro interno do servidor" 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);