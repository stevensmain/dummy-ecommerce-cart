'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { BRANDS } from '@/mocks/brands';
import useCategories from '@/hooks/use-categories';
import { type FiltersForm, filtersSchema } from '@/schemas/filters';

import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

export default function ProductFilters() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const { categories } = useCategories();

  const form = useForm({
    mode: 'onChange',
    resolver: zodResolver(filtersSchema),
  });
  const { control, handleSubmit } = form;

  const onSubmit = handleSubmit((data: FiltersForm) => {
    const params = new URLSearchParams(searchParams);

    Object.entries(data).forEach(([key, value]) => {
      if (value) {
        params.set(key, value.toString());
      } else {
        params.delete(key);
      }
    });

    replace(`${pathname}?${params.toString()}`);
  });

  const handleClearFilters = () => {
    form.reset();
    replace(pathname);
  };

  return (
    <Form {...form}>
      <form onSubmit={onSubmit}>
        <div className="flex flex-wrap gap-4">
          <FormField
            control={control}
            name="disc"
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={(value) => {
                    field.onChange(value);
                    onSubmit();
                  }}
                  value={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-[150px] bg-accent">
                      <SelectValue placeholder="Discount" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="5">+5%</SelectItem>
                    <SelectItem value="10">+10%</SelectItem>
                    <SelectItem value="15">+15%</SelectItem>
                    <SelectItem value="20">+20%</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="rating"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Select
                    onValueChange={(value) => {
                      field.onChange(value);
                      onSubmit();
                    }}
                    value={field.value}
                  >
                    <SelectTrigger className="w-[150px] bg-accent">
                      <SelectValue placeholder="Ratings" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="3">+3</SelectItem>
                      <SelectItem value="3.5">+3.5</SelectItem>
                      <SelectItem value="4">+4</SelectItem>
                      <SelectItem value="4.5">+4.5</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="brand"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Select
                    onValueChange={(value) => {
                      field.onChange(value);
                      onSubmit();
                    }}
                    value={field.value}
                  >
                    <SelectTrigger className="w-[150px] bg-accent">
                      <SelectValue placeholder="Brands" />
                    </SelectTrigger>
                    <SelectContent>
                      {BRANDS.map((brand) => (
                        <SelectItem key={brand} value={brand}>
                          {brand}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="cat"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Select
                    onValueChange={(value) => {
                      field.onChange(value);
                      onSubmit();
                    }}
                    value={field.value}
                  >
                    <SelectTrigger className="w-[150px] bg-accent">
                      <SelectValue placeholder="Categories" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((categories) => (
                        <SelectItem key={categories} value={categories}>
                          {categories}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="min"
            render={({ field: { onChange, ...field } }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Min price"
                    min={0}
                    className="w-24 text-xs"
                    onChange={(value) => {
                      onChange(value);
                      onSubmit();
                    }}
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="max"
            render={({ field: { onChange, ...field } }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Max price"
                    min={0}
                    className="w-24 text-xs"
                    onChange={(value) => {
                      onChange(value);
                      onSubmit();
                    }}
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <Button variant="default" onClick={handleClearFilters}>
            Clear filters
          </Button>
        </div>
      </form>
    </Form>
  );
}
