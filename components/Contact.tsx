import Link from "next/link";
import React from "react";

const Contact = () => {
    return (
        <section className="min-h-52 bg-accent  flex flex-col items-center justify-center">
            <h1 className="text-2xl mb-10 font-bold text-primary-foreground ">
                Visit contact page
            </h1>
            <Link href="/contact" className="bg-primary  p-2 rounded">
                Go to contact page &rarr;
            </Link>
        </section>
    );
};

export default Contact;
