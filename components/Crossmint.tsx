"use client";

import { CrossmintPaymentElement } from "@crossmint/client-sdk-react-ui";

const Crossmint: React.FC = () => {
    const projectId = process.env.NEXT_PUBLIC_PROJECT_ID as string;
    const collectionId = process.env.NEXT_PUBLIC_COLLECTION_ID as string;
    const environment = process.env.NEXT_PUBLIC_ENVIRONMENT as string;

    return (
        <>
            <div className="sm:col-span-3">
                <CrossmintPaymentElement
                    projectId={projectId}
                    collectionId={collectionId}
                    environment={environment}
                    emailInputOptions={{
                        show: true,
                    }}
                    mintConfig={{
                        type: "erc-721",
                        totalPrice: "0.0001",
                    }}
                    onEvent={(event) => {
                        console.log(event);
                    }}
                />
            </div>
        </>
    );
};

export default Crossmint;
