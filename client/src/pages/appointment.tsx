import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertAppointmentSchema } from "@shared/schema";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

type AppointmentFormData = z.infer<typeof insertAppointmentSchema>;

export default function Appointment() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<AppointmentFormData>({
    resolver: zodResolver(insertAppointmentSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      treatment: "",
      preferredDate: "",
      preferredTime: "",
      message: "",
    },
  });

  const appointmentMutation = useMutation({
    mutationFn: async (data: AppointmentFormData) => {
      const response = await apiRequest("POST", "/api/appointments", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Timeforespørsel sendt!",
        description: "Vi kontakter deg så snart som mulig for å bekrefte tiden.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Feil ved sending",
        description: "Noe gikk galt. Vennligst prøv igjen eller ring oss direkte.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = async (data: AppointmentFormData) => {
    setIsSubmitting(true);
    await appointmentMutation.mutateAsync(data);
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Bestill time</h1>
          <p className="text-xl text-gray-600">Velg den måten som passer deg best</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Online Booking */}
          <Card className="bg-gradient-to-br from-brand-pink-light to-pink-50">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-brand-pink rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="text-white" size={32} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Online timebestilling</h2>
              <p className="text-gray-600 mb-6">Book time 24/7 via vårt enkle bestillingssystem</p>
              <p className="text-sm text-gray-500">Fyll ut skjemaet nedenfor</p>
            </CardContent>
          </Card>
          
          {/* Phone Booking */}
          <Card className="bg-gradient-to-br from-brand-green-light to-green-50">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="text-white" size={32} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Ring oss</h2>
              <p className="text-gray-600 mb-6">Snakk direkte med Malin for personlig service</p>
              <div className="bg-white rounded-lg p-4 mb-4">
                <p className="text-2xl font-bold text-gray-900">22 46 80 86</p>
              </div>
              <Button className="bg-brand-green text-white hover:bg-brand-green/90 w-full">
                Ring nå
              </Button>
            </CardContent>
          </Card>
        </div>
        
        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-center">Eller send oss en melding</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Fornavn</FormLabel>
                        <FormControl>
                          <Input placeholder="Ditt fornavn" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Etternavn</FormLabel>
                        <FormControl>
                          <Input placeholder="Ditt etternavn" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Telefon</FormLabel>
                        <FormControl>
                          <Input placeholder="Ditt telefonnummer" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>E-post</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="Din e-postadresse" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="treatment"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Behandling</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Velg behandling" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="undersokelse">Undersøkelse</SelectItem>
                          <SelectItem value="tannrens">Tannrens</SelectItem>
                          <SelectItem value="implantat">Implantat konsultasjon</SelectItem>
                          <SelectItem value="kosmetisk">Kosmetisk behandling</SelectItem>
                          <SelectItem value="akutt">Akutt time</SelectItem>
                          <SelectItem value="annet">Annet</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="preferredDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Ønsket dato</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="preferredTime"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Ønsket tid</FormLabel>
                        <FormControl>
                          <Input type="time" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Melding</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Fortell oss hva du trenger hjelp med..." 
                          rows={4} 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="text-center">
                  <Button 
                    type="submit" 
                    className="bg-brand-pink text-white hover:bg-brand-pink/90 px-8 py-3"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sender melding..." : "Send melding"}
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
