import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Train, Bus, Car } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactMessageSchema } from "@shared/schema";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import osloImageVenice from "@assets/image_1751814850397.png";

type ContactFormData = z.infer<typeof insertContactMessageSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Melding sendt!",
        description: "Takk for din henvendelse. Vi kontakter deg så snart som mulig.",
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

  const handleSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    await contactMutation.mutateAsync(data);
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Kontakt oss</h1>
          <p className="text-xl text-gray-600">Finn veien til oss eller ta kontakt</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <Card className="bg-gray-50 mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">Kontaktinformasjon</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-brand-pink-light rounded-full flex items-center justify-center mr-4">
                    <MapPin className="text-brand-pink" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Adresse</p>
                    <p className="text-gray-600">Majorstuveien 36, 0367 Oslo</p>
                    <p className="text-sm text-gray-500">8. etasje, over Nationaltheateret stasjon</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-brand-green-light rounded-full flex items-center justify-center mr-4">
                    <Phone className="text-brand-green" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Telefon</p>
                    <p className="text-gray-600">22 46 80 86</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-brand-pink-light rounded-full flex items-center justify-center mr-4">
                    <Mail className="text-brand-pink" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">E-post</p>
                    <p className="text-gray-600">post@tannlegeslaattebrekk.no</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-brand-green-light">
              <CardHeader>
                <CardTitle className="text-2xl">Åpningstider</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Mandag</span>
                  <span className="font-semibold text-gray-900">10:00 - 17:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Tirsdag</span>
                  <span className="font-semibold text-gray-900">09:00 - 15:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Onsdag</span>
                  <span className="font-semibold text-gray-900">08:30 - 15:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Torsdag</span>
                  <span className="font-semibold text-gray-900">08:30 - 15:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Fredag</span>
                  <span className="font-semibold text-gray-900">09:00 - 15:00</span>
                </div>
                <div className="flex justify-between items-center border-t border-gray-200 pt-2">
                  <span className="text-gray-700">Helger</span>
                  <span className="font-semibold text-gray-900">Stengt</span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <div className="bg-gray-200 rounded-xl h-96 mb-8 overflow-hidden">
              <img 
                src={osloImageVenice} 
                alt="Oslo sentrum med Nationaltheateret og omgivelser" 
                className="w-full h-full object-cover" 
              />
            </div>
            
            <Card className="bg-gray-50">
              <CardHeader>
                <CardTitle className="text-2xl">Hvordan komme seg hit</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Train className="text-blue-600" size={16} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">T-bane</p>
                    <p className="text-gray-600">Nationaltheateret stasjon (alle linjer)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Bus className="text-green-600" size={16} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Buss</p>
                    <p className="text-gray-600">Holdeplass Nationaltheateret</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Car className="text-purple-600" size={16} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Parkering</p>
                    <p className="text-gray-600">Parkeringshus i nærheten</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Send oss en melding</CardTitle>
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
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Melding</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Skriv din melding her..." 
                            rows={6} 
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
    </div>
  );
}
