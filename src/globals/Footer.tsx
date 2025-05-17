"use client";

import Image from "next/image";
import React from "react";

import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ImWhatsapp } from "react-icons/im";

const formSchema = z.object({
  email: z.string().email(),
});

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { Mail, MapPin, PhoneCall } from "lucide-react";
import { cn } from "@/lib/utils";

export const FooterSubscribeForm = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex items-center gap-x-4 h-14"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-y-2 h-full">
              <FormControl>
                <Input
                  placeholder="Email Address"
                  {...field}
                  className="h-full"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" className="h-full text-base cursor-pointer">
          Subscribe
        </Button>
      </form>
    </Form>
  );
};

export const SocialLists = () => {
  const SOCIAL_LISTS = [
    { key: "facebook", icon: FaFacebookF, url: "#" },
    { key: "linkedin", icon: FaLinkedinIn, url: "#" },
    { key: "twitter-x", icon: FaXTwitter, url: "#" },
    { key: "whatsapp", icon: ImWhatsapp, url: "#" },
  ];

  return (
    <ul
      aria-describedby="social-lists"
      className="flex items-center gap-x-3 gap-y-4"
    >
      {SOCIAL_LISTS.map(({ icon: Icon, key, url }) => (
        <li className="flex w-max" key={key}>
          <Link
            href={url}
            className="text-sm text-white bg-regal-blue-500 p-2 rounded-full flex items-center justify-center w-max transition-all ease-in-out duration-300 hover:bg-regal-blue-600 group/social-link"
          >
            <Icon className="transition-transform ease-in-out duration-200 group-hover/social-link:scale-120" />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export const FooterNavigation = () => {
  const FOOTER_NAV_ITEMS = [
    {
      key: "courses",
      lists: [
        {
          label: "Tajweed",
          url: "#",
        },
        {
          label: "Quran",
          url: "#",
        },
        {
          label: "Arabic",
          url: "#",
        },
        {
          label: "Memorization",
          url: "#",
        },
      ],
    },
    {
      key: "explore",
      lists: [
        {
          label: "About us",
          url: "/about-us",
        },
        {
          label: "Blog",
          url: "/blogs",
        },
        {
          label: "Our Teachers",
          url: "/our-teachers",
        },
        {
          label: "Testimonials",
          url: "#",
        },
        {
          label: "FAQ",
          url: "/faqs",
        },
        {
          label: "Career",
          url: "/career",
        },
        {
          label: "Sitemap",
          url: "#",
        },
      ],
    },
  ];

  return (
    <React.Fragment>
      {FOOTER_NAV_ITEMS.map((nav) => (
        <ul aria-describedby="nav-column" className="flex flex-col gap-y-4" key={nav.key}>
          <h4
            aria-describedby="nav-title"
            className="text-xl font-bold text-neutral-800 uppercase"
          >
            {nav.key}
          </h4>

          {nav.lists.map((list, index) => (
            <li aria-describedby="nav-item" key={index}>
              <Link
                href={list.url}
                className="text-lg font-normal text-neutral-800 transition-colors ease-in-out duration-300 hover:text-sky-blue-500"
              >
                {list.label}
              </Link>
            </li>
          ))}
        </ul>
      ))}
    </React.Fragment>
  );
};

export const ContactLists = () => {
  const CONTACT_LISTS = [
    {
      key: "email",
      label: "support@bayyinah.academy",
      url: "mailto:support@bayyinah.academy",
      icon: Mail,
    },
    {
      key: "phone",
      label: "+447700183406",
      url: "tel:+447700183406",
      icon: PhoneCall,
    },
    {
      key: "location",
      label: "128, City Road ECIV 2NX, London UNITED KINGDOM",
      url: "https://maps.app.goo.gl/pg94BVUuYVQPzqYv9",
      icon: MapPin,
    },
  ];

  return (
    <div aria-describedby="get-in-touch-column">
      <h4
        aria-describedby="column-title"
        className="text-xl mb-4 font-bold text-neutral-800 uppercase"
      >
        Get In Touch
      </h4>

      <ul
        aria-describedby="contact-lists"
        className="flex items-start flex-col gap-y-4"
      >
        {CONTACT_LISTS.map((contact) => (
          <li aria-describedby="list-item" className="flex" key={contact.key}>
            <Link
              target="_blank"
              href={contact.url}
              className="flex items-start gap-x-2 group/contact-item"
            >
              <span
                aria-describedby="icon"
                className="bg-white p-2 shrink-0 grow-0 basis-auto border border-[#F3F3F3] shadow-sm rounded-full flex justify-center items-center transition-colors ease-in-out duration-300 group-hover/contact-item:border-sky-blue-500"
              >
                <contact.icon className="w-4 h-4 text-regal-blue-500 " />
              </span>
              <p className="text-lg font-normal text-neutral-800 transition-colors ease-in-out duration-300 group-hover/contact-item:text-sky-blue-500">
                {contact.label}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  return (
    <React.Fragment>
      <footer aria-describedby="main-footer">
        <div className="container">
          <div aria-describedby="main-wrapper">
            <div
              aria-describedby="footer-content-wrapper"
              className={cn('flex items-start gap-x-28 gap-y-10 py-12 flex-col',
                // sm
                'sm:flex-row sm:gap-x-16'
              )}
            >
              <div aria-describedby="site-info-column">
                <div aria-describedby="column-content-wrapper">
                  <div
                    aria-describedby="footer-logo-wrapper"
                    className="flex items-center w-48 mb-12"
                  >
                    <Image
                      src={"/bayyinah-logo.jpg"}
                      width={520}
                      height={162}
                      alt="Bayyinah logo"
                      priority
                      className=""
                    />
                  </div>

                  <div
                    aria-describedby="subscribe-form-wrapper"
                    className="mb-8"
                  >
                    <FooterSubscribeForm />
                  </div>

                  <div aria-describedby="footer-social" className="mb-12">
                    <SocialLists />
                  </div>

                  <div
                    aria-describedby="download-app"
                    className="flex items-start flex-col gap-y-3"
                  >
                    <h4 className="text-xl font-medium text-neutral-800">
                      Download our App
                    </h4>
                    <div
                      aria-describedby="image-wrapper"
                      className="w-[300px] flex cursor-not-allowed"
                    >
                      <Image
                        src={"/app-store.png"}
                        width={903}
                        height={198}
                        alt="Bayyinah Mobile app"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div
                aria-describedby="navigation-column"
                className="flex items-start gap-x-20 gap-y-10 flex-wrap xl:flex-nowrap"
              >
                <FooterNavigation />
                <ContactLists />
              </div>
            </div>
          </div>
        </div>

        <div
          aria-describedby="footer-copyright-area"
          className="bg-[#EDEFF2] h-20 flex items-center justify-center w-full"
        >
          <div className="container">
            <div
              aria-describedby="content-wrapper"
              className="flex items-center justify-between gap-5 flex-col sm:flex-row"
            >
              <p className="text-sm sm:text-base font-medium text-neutral-800">
                © Bayyinah Academy Ltd.
              </p>

              <ul className="flex items-center">
                <li className="flex pr-2 last:pr-0 border-r border-r-neutral-400 last:border-r-0 last:pl-2">
                  <Link
                    href={"#"}
                    className="text-xs sm:text-base font-medium text-neutral-600 transition-colors ease-in-out duration-300 hover:text-regal-blue-600"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li className="flex pr-2 last:pr-0 border-r border-r-neutral-400 last:border-r-0 last:pl-2">
                  <Link
                    href={"#"}
                    className="text-xs sm:text-base font-medium text-neutral-600 transition-colors ease-in-out duration-300 hover:text-regal-blue-600"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
