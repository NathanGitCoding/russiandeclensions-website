/**
 * Types Supabase pour l'API waitlist uniquement (website russiandeclensions.com)
 */

export interface Database {
  public: {
    Tables: {
      waitlist: {
        Row: {
          id: string;
          email: string;
          source: 'ios' | 'android';
          marketing_accepted: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          email: string;
          source: 'ios' | 'android';
          marketing_accepted: boolean;
          created_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          source?: 'ios' | 'android';
          marketing_accepted?: boolean;
          created_at?: string;
        };
        Relationships: [];
      };
    };
  };
}
