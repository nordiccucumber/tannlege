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
import { FadeInOutSection } from "@/components/FadeInOutSection";

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
        title: "Takk for henvendelsen!",
        description: "Vi svarer deg så snart vi kan.",
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
        <FadeInOutSection>
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Kontakt oss</h1>
            <p className="text-xl text-gray-600">Finn veien til oss eller ta kontakt</p>
          </div>
        </FadeInOutSection>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <FadeInOutSection>
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
                      <p className="text-gray-600">Stortingsgata 30, 0161 Oslo</p>
                      <p className="text-sm text-gray-500">8. etasje</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-[#F5FAF6] rounded-full flex items-center justify-center mr-4">
                      <Phone className="text-[#6B8E23]" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Telefon</p>
                      <p className="text-gray-600">22 83 41 73</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-brand-pink-light rounded-full flex items-center justify-center mr-4">
                      <Mail className="text-brand-pink" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">E-post</p>
                      <p className="text-gray-600">tannlegeslattebrekk@gmail.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeInOutSection>

            <FadeInOutSection delay={0.1}>
              <Card className="bg-[#C3E26E]/30">
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
            </FadeInOutSection>
          </div>

          <div>
            <FadeInOutSection>
              <div className="bg-gray-200 rounded-xl h-96 mb-8 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1999.6!2d10.740!3d59.913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416e61f267f039%3A0x7e92605fd3231e9a!2sStortingsgata%2030%2C%200161%20Oslo!5e0!3m2!1sen!2sno!4v1620000000000!5m2!1sen!2sno"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Tannlege Slåttebrekk lokasjon"
                />
              </div>
            </FadeInOutSection>

            <FadeInOutSection delay={0.2}>
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
            </FadeInOutSection>
          </div>
        </div>

        {/* Contact Form */}
        <FadeInOutSection>
          <div className="mt-16">
            <Card className="bg-[#C3E26E]/10">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Kontakt oss</CardTitle>
                <p className="text-gray-600 mt-2">Vi tar imot nye pasienter og ser frem til å møte deg!</p>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Navn *</FormLabel>
                          <FormControl>
                            <Input placeholder="Ditt navn" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>E-post *</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="Din e-postadresse" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
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
                    </div>

                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Ønsket dato / tidspunkt</FormLabel>
                          <FormControl>
                            <Input placeholder="F.eks. onsdag 15. januar kl 14:00" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

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
        </FadeInOutSection>
      </div>
    </div>
  );
}