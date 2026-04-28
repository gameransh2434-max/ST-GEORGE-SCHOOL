"use client";

import {
  CheckCircle2,
  Loader2,
  AlertCircle,
  ShieldCheck,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState, useEffect } from "react";
import { useUser, SignInButton } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import { Input, Textarea, Label, FieldError } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { ADMISSION_EMAIL } from "@/lib/site-config";
import { VisitorBadge } from "./visitor-badge";

const formSchema = z.object({
  parentName: z.string().min(2, "Name must be at least 2 characters."),
  phone: z.string().min(7, "Please enter a valid phone number."),
  email: z.string().email("Please enter a valid email address."),
  childName: z.string().min(2, "Child's name must be at least 2 characters."),
  classApplied: z.string().min(1, "Please select a class."),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const CLASS_OPTIONS = [
  "Nur",
  "LKG",
  "UKG",
  "Class 1",
  "Class 2",
  "Class 3",
  "Class 4",
  "Class 5",
  "Class 6",
  "Class 7",
  "Class 8",
  "Class 9",
  "Class 10",
  "Class 11 (Science)",
  "Class 11 (Commerce)",
  "Class 11 (Mathematics)",
  "Class 12 (Science)",
  "Class 12 (Commerce)",
  "Class 12 (Mathematics)",
].map((c) => ({ value: c, label: c }));

export function Admissions() {
  const { isSignedIn, isLoaded, user } = useUser();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      parentName: "",
      phone: "",
      email: "",
      childName: "",
      classApplied: "",
      message: "",
    },
  });

  // Prefill the email field with the signed-in user's Google email.
  useEffect(() => {
    if (isSignedIn && user?.primaryEmailAddress?.emailAddress) {
      const current = form.getValues("email");
      if (!current) {
        form.setValue("email", user.primaryEmailAddress.emailAddress);
      }
    }
  }, [isSignedIn, user, form]);

  async function onSubmit(values: FormValues) {
    if (!isSignedIn) return;

    setIsSending(true);
    setSubmitError(null);

    try {
      const payload = {
        _subject: `New Admission Enquiry — ${values.childName} (${values.classApplied})`,
        _template: "table",
        _captcha: "false",
        "Parent / Guardian": values.parentName,
        "Phone": values.phone,
        "Contact Email": values.email,
        "Student Name": values.childName,
        "Class Applying For": values.classApplied,
        "Message": values.message || "—",
        "Submitted by (Google account)":
          user?.primaryEmailAddress?.emailAddress ?? "unknown",
        "Submitted from": typeof window !== "undefined" ? window.location.href : "",
      };

      const res = await fetch(
        `https://formsubmit.co/ajax/${ADMISSION_EMAIL}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        },
      );

      if (!res.ok) {
        throw new Error(`Submit failed (${res.status})`);
      }

      setIsSubmitted(true);
      form.reset({
        parentName: "",
        phone: "",
        email: user?.primaryEmailAddress?.emailAddress ?? "",
        childName: "",
        classApplied: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      setSubmitError(
        "We couldn't send your enquiry right now. Please try again or call the school office.",
      );
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section id="admissions" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <div>
            <div className="mb-6">
              <VisitorBadge />
            </div>

            <h2 className="font-serif text-4xl md:text-5xl text-foreground font-bold mb-6">
              Join the St. George Family
            </h2>

            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We are currently accepting applications from Nur, LKG, UKG and
              Class 1 through Class 12. Secure a place for your child in an
              institution that prioritizes academic excellence and strong moral
              values.
            </p>

            <div className="space-y-6 mb-10">
              {[
                {
                  n: 1,
                  title: "Submit Enquiry",
                  desc: "Fill out the form or visit the school office to collect the admission prospectus.",
                },
                {
                  n: 2,
                  title: "Interaction",
                  desc: "A brief interaction session with the Principal/Coordinator and the student.",
                },
                {
                  n: 3,
                  title: "Enrollment",
                  desc: "Submission of necessary documents and fee deposit to secure admission.",
                },
              ].map((step) => (
                <div key={step.n} className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-school-navy/5 flex items-center justify-center shrink-0">
                    <span className="font-serif font-bold text-school-navy text-xl">
                      {step.n}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-bold text-foreground">
                      {step.title}
                    </h4>
                    <p className="text-muted-foreground mt-1">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-school-navy p-6 text-white shadow-lg">
              <h4 className="font-serif text-xl font-bold mb-2 text-school-gold">
                Visit the Office
              </h4>
              <p className="mb-1 text-sm text-white/80">
                Awas Vikas, Chilla Road, Banda
              </p>
              <p className="mb-4 text-sm text-white/80">
                9:00 AM to 1:00 PM (Mon-Sat)
              </p>
              <div className="flex gap-4 text-sm">
                <div className="font-medium">05192-220842</div>
                <div className="font-medium">6388675905</div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-zinc-50 p-8 md:p-10 border border-zinc-200 shadow-xl relative">
            <div className="absolute top-0 left-0 w-full h-2 bg-school-gold" />

            <h3 className="font-serif text-2xl font-bold text-school-navy mb-6">
              Admission Enquiry Form
            </h3>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center h-full min-h-[400px]">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={32} />
                </div>
                <h4 className="font-serif text-2xl font-bold text-foreground mb-2">
                  Enquiry Received
                </h4>
                <p className="text-muted-foreground mb-8 max-w-sm">
                  Thank you for your interest in St. George School. Our
                  admission counselor will contact you shortly.
                </p>
                <Button
                  variant="outline"
                  className="border-school-navy text-school-navy"
                  onClick={() => setIsSubmitted(false)}
                >
                  Submit Another Enquiry
                </Button>
              </div>
            ) : (
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5"
              >
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <Label htmlFor="parentName">Parent/Guardian Name *</Label>
                    <Input
                      id="parentName"
                      placeholder="Madara Uchiha"
                      {...form.register("parentName")}
                    />
                    <FieldError
                      message={form.formState.errors.parentName?.message}
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      placeholder="10-digit number"
                      {...form.register("phone")}
                    />
                    <FieldError
                      message={form.formState.errors.phone?.message}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="madara.uchiha@example.com"
                    {...form.register("email")}
                  />
                  <FieldError message={form.formState.errors.email?.message} />
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <Label htmlFor="childName">Child&apos;s Name *</Label>
                    <Input
                      id="childName"
                      placeholder="Sasuke Uchiha"
                      {...form.register("childName")}
                    />
                    <FieldError
                      message={form.formState.errors.childName?.message}
                    />
                  </div>
                  <div>
                    <Label htmlFor="classApplied">Class Applied For *</Label>
                    <Select
                      id="classApplied"
                      placeholder="Select class"
                      options={CLASS_OPTIONS}
                      {...form.register("classApplied")}
                    />
                    <FieldError
                      message={form.formState.errors.classApplied?.message}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Additional Message (Optional)</Label>
                  <Textarea
                    id="message"
                    rows={3}
                    placeholder="Any specific queries..."
                    {...form.register("message")}
                  />
                </div>

                {submitError ? (
                  <div className="flex items-start gap-2 bg-red-50 border border-red-200 p-3 text-sm text-red-700">
                    <AlertCircle size={16} className="shrink-0 mt-0.5" />
                    <span>{submitError}</span>
                  </div>
                ) : null}

                {!isLoaded ? (
                  <Button
                    type="button"
                    disabled
                    size="xl"
                    className="w-full mt-2"
                  >
                    <Loader2 className="animate-spin mr-2" size={18} />
                    Loading…
                  </Button>
                ) : isSignedIn ? (
                  <>
                    <div className="flex items-center gap-2 bg-green-50 border border-green-200 p-3 text-xs text-green-800">
                      <ShieldCheck size={14} className="shrink-0" />
                      <span>
                        Verified as{" "}
                        <span className="font-semibold">
                          {user?.primaryEmailAddress?.emailAddress}
                        </span>
                      </span>
                    </div>
                    <Button
                      type="submit"
                      size="xl"
                      disabled={isSending}
                      className="w-full mt-2"
                    >
                      {isSending ? (
                        <>
                          <Loader2 className="animate-spin mr-2" size={18} />
                          Submitting…
                        </>
                      ) : (
                        "Submit Enquiry"
                      )}
                    </Button>
                  </>
                ) : (
                  <div className="space-y-3 mt-2">
                    <p className="text-sm text-muted-foreground text-center">
                      To prevent spam, please verify with your Google account
                      before submitting.
                    </p>
                    <SignInButton mode="modal">
                      <Button type="button" size="xl" className="w-full group">
                        <GoogleGlyph />
                        <span className="ml-2">Continue with Google to Submit</span>
                      </Button>
                    </SignInButton>
                  </div>
                )}

                <p className="text-xs text-center text-muted-foreground mt-4">
                  By submitting this form, you agree to receive communication
                  from St. George School regarding admissions.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function GoogleGlyph() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        fill="#FFC107"
        d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"
      />
      <path
        fill="#FF3D00"
        d="M6.3 14.7l6.6 4.8C14.6 16 19 13 24 13c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.4 6.3 14.7z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35 26.7 36 24 36c-5.2 0-9.7-3.3-11.3-8l-6.5 5C9.6 39.6 16.2 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.3-4.2 5.6l6.2 5.2C40.7 35.6 44 30.2 44 24c0-1.3-.1-2.4-.4-3.5z"
      />
    </svg>
  );
}
