import React from "react";
import { useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";


export const Head = () => {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter, title: pageTitle } = useConfig();
    const url =
        "https://docs.einstack.ai" +
        (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

    // TODO: make metadata depend on the project docs

    const description = frontMatter.description ?? "";
    const title = frontMatter.title ?? pageTitle;

    const image = frontMatter.ogImage ? "https://docs.einstack.ai" + frontMatter.ogImage : "https://docs.einstack.ai/images/glide/og.png";
    const video = frontMatter.ogVideo ? "https://docs.einstack.ai" + frontMatter.ogVideo : null;

    return (
        <>
            <meta name="theme-color" content="#0D9373" />
            <meta property="og:url" content={url} />
            <meta httpEquiv="Content-Language" content="en" />

            <meta name="description" content={description} />
            <meta property="og:description" content={description} />

            {video && <meta property="og:video" content={video} />}

            <meta property="og:image" content={image} />
            <meta property="twitter:image" content={image} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site:domain" content="docs.einstack.ai" />
            <meta name="twitter:url" content="https://docs.einstack.ai" />

            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/apple-touch-icon.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/favicon-32x32.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/favicon-16x16.png"
            />
        </>
    );
}
