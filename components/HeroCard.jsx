"use client";

import { useRouter } from "next/navigation";
import { Button } from "@components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs";

export function HeroCard() {
  const router = useRouter();
  return (
    <Tabs defaultValue="donatesingle" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="donatesingle">Donate Single</TabsTrigger>
        <TabsTrigger value="createbox">Create Box</TabsTrigger>
      </TabsList>
      <TabsContent value="donatesingle">
        <Card>
          <CardHeader>
            <CardTitle>Donate a single Item</CardTitle>
            <CardDescription>Donate a single item to a box.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select donation type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ngo">NGOs</SelectItem>
                  <SelectItem value="Individual">Individual</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1">
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="clothes">Clothes</SelectItem>
                  <SelectItem value="footware">Footware</SelectItem>
                  <SelectItem value="electronics">Electronics</SelectItem>
                  <SelectItem value="books">Books</SelectItem>
                  <SelectItem value="accessories">Accessories</SelectItem>
                  <SelectItem value="furniture">Furniture</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1">
              <Label htmlFor="no_of_items">Enter no. of Items</Label>
              <Input
                id="no_of_items"
                type="number"
                placeholder="No. of items"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={() => router.push("/donate")}>Donate</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="createbox">
        <Card>
          <CardHeader>
            <CardTitle>Create a Box</CardTitle>
            <CardDescription>
              Create a box of multiple item types to donate.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select category 1" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="clothes">Clothes</SelectItem>
                  <SelectItem value="footware">Footware</SelectItem>
                  <SelectItem value="electronics">Electronics</SelectItem>
                  <SelectItem value="books">Books</SelectItem>
                  <SelectItem value="accessories">Accessories</SelectItem>
                  <SelectItem value="furniture">Furniture</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1">
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select category 2" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="clothes">Clothes</SelectItem>
                  <SelectItem value="footware">Footware</SelectItem>
                  <SelectItem value="electronics">Electronics</SelectItem>
                  <SelectItem value="books">Books</SelectItem>
                  <SelectItem value="accessories">Accessories</SelectItem>
                  <SelectItem value="furniture">Furniture</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1">
              <Label htmlFor="no_of_items">Enter no. of Items</Label>
              <Input
                id="no_of_items"
                type="number"
                placeholder="No. of items"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={() => router.push("/donate")}>Donate</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
