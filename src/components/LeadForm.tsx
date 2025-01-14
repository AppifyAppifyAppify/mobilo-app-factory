import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useState, useEffect } from "react";

export const LeadForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(() => {
    // Initialize from localStorage on component mount
    return localStorage.getItem('leadFormSubmitted') === 'true';
  });
  const [formData, setFormData] = useState({
    company_name: '',
    business_email: '',
    website_url: '',
    active_clients: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('leads')
        .insert([{
          company_name: formData.company_name,
          business_email: formData.business_email,
          website_url: formData.website_url,
          active_clients: parseInt(formData.active_clients)
        }]);

      if (error) throw error;

      toast({
        title: "תודה על פנייתך!",
        description: "נציג שלנו יצור איתך קשר בהקדם.",
      });

      // Set both state and localStorage
      setIsSubmitted(true);
      localStorage.setItem('leadFormSubmitted', 'true');

    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "שגיאה",
        description: "אירעה שגיאה בשליחת הטופס. אנא נסה שוב.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div id="lead-form" className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 font-heebo" dir="rtl">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 text-center">
          <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
            תודה רבה על פנייתך!
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-center text-lg leading-8 text-gray-300">
            נציג שלנו יצור איתך קשר בהקדם האפשרי כדי לדון באפשרויות שיתוף הפעולה.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div id="lead-form" className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 font-heebo" dir="rtl">
      <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24">
        <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
          התחל להמיר אתרים היום
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300">
					גלה איך Appify יכול להוסיף אפיקי רווח לעסק שלך
        </p>
        <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-md space-y-6">
          <div>
            <Label htmlFor="company_name" className="text-white">שם החברה</Label>
            <Input 
              id="company_name" 
              type="text" 
              required 
              className="mt-2"
              value={formData.company_name}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label htmlFor="business_email" className="text-white">דוא״ל עסקי</Label>
            <Input 
              id="business_email" 
              type="email" 
              required 
              className="mt-2"
              value={formData.business_email}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label htmlFor="website_url" className="text-white">אתר החברה</Label>
            <Input 
              id="website_url" 
              type="url" 
              required 
              className="mt-2"
              value={formData.website_url}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label htmlFor="active_clients" className="text-white">מספר לקוחות פעילים</Label>
            <Input 
              id="active_clients" 
              type="number" 
              required 
              className="mt-2"
              value={formData.active_clients}
              onChange={handleChange}
            />
          </div>
          <Button 
            type="submit" 
            className="w-full gradient-bg"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'שולח...' : 'התחל עכשיו'}
          </Button>
        </form>
      </div>
    </div>
  );
};
