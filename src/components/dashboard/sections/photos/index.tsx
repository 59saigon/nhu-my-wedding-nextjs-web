import { columns } from "./columns";

import { isDeleted_options } from "@/components/common/filters";

import { DataTable } from "@/components/common/data-table-generic/data-table";
import { FilterEnum } from "@/types/filter-enum";
import { formFilterAdvanceds } from "./filter-advanced-form";
import { photoService } from "@/services/photo-service";
import { z } from "zod";
import { Card } from "@/components/ui/card";

const formFilterAdvancedSchema = z.object({
  id: z.string().nullable().optional(),
  date: z
    .object({
      from: z.date().optional(),
      to: z.date().optional(),
    })
    .refine((date) => !!date.to, { message: "End Date is required." })
    .optional(),
  isDeleted: z.boolean().nullable().optional(),
});

export default function DataTablePhotos() {
  const filterEnums: FilterEnum[] = [
    { columnId: "isDeleted", title: "Is deleted", options: isDeleted_options },
  ];
  return (
      <DataTable
        deleteAll={photoService.delete}
        deletePermanent={photoService.deletePermanent}
        update={photoService.update}
        columns={columns}
        fetchData={photoService.fetchAll}
        columnSearch="title"
        filterEnums={filterEnums}
        formSchema={formFilterAdvancedSchema}
        formFilterAdvanceds={formFilterAdvanceds}
      />
  );
}
