"use client";

import React, { ReactNode } from "react";
import { MantineProvider } from "@mantine/core";
import { HeaderMegaMenu } from "../../components/Navbar";

interface IProviders {
    children: ReactNode;
}

const Providers = ({ children }: IProviders) => {
    return (
        <MantineProvider withGlobalStyles withNormalizeCSS theme={{
        }}>

            {children}
        </MantineProvider>
    );
};

export default Providers;