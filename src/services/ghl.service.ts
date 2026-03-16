import axios from 'axios';

export interface GHLContactPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message?: string;
  source?: string;
  urgency?: string;
  serviceType?: string;
  notes?: string;
  tags?: string[];
}

class GHLService {
  private readonly WEBHOOK_URL = 'https://services.leadconnectorhq.com/hooks/fEMLLNjtxgizyNARamWS/webhook-trigger/b4dd53c6-a641-4d89-b27b-6233034965f5';

  /**
   * Sends contact information to GoHighLevel CRM via Webhook.
   * @param payload The contact data to send.
   */
  async sendContact(payload: GHLContactPayload): Promise<void> {
    try {
      await axios.post(this.WEBHOOK_URL, {
        ...payload,
        source: payload.source || 'Students2Madrid Website'
      });
    } catch (error) {
      console.error('GHL Service Error:', error);
      throw new Error('Failed to send information to CRM');
    }
  }
}

export const ghlService = new GHLService();
