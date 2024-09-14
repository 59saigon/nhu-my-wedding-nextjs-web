"use client";

import {Breadcrumbs} from "@/components/user/breadcrumb";
import {ContentLayout} from "@/components/dashboard/content-layout";
import {PhotoForm} from "@/components/dashboard/tables/photos/create-update-form";

const breadcrumbItems = [
    {title: "Dashboard", link: "/dashboard"},
    {title: "Photo", link: "/dashboard/photo"},
    {title: "New", link: "/dashboard/photo/new"},
];

export default function Page() {
    return (
        <ContentLayout title="Photo">
            <div className="space-y-6">
                <Breadcrumbs items={breadcrumbItems}/>
                <PhotoForm initialData={null}/>
            </div>
        </ContentLayout>
    );
}
