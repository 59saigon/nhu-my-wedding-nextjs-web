"use client"
import {SubCategoryForm} from "@/components/dashboard/sites/sub-categories/create-update-form";

export default function Page() {
    return (
        <div className="space-y-6">
            <SubCategoryForm initialData={null}/>
        </div>
    )
}
