import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Card, CardContent } from './ui/card';
import { useToast } from '../hooks/use-toast';

const ShippingCalculator = () => {
  const { toast } = useToast();
  const [boxes, setBoxes] = useState([{ id: 1 }]);
  const [formData, setFormData] = useState({
    shippingMethod: 'surface',
    status: 'forward',
    originPincode: '',
    destinationPincode: '',
    codAmount: '',
    paymentMode: 'cod',
    shipmentType: 'b2c',
    invoiceAmount: '',
    weight: '',
    wUnit: 'g',
    length: '',
    breadth: '',
    height: '',
    count: '',
  });

  const addMoreBoxes = () => {
    setBoxes([...boxes, { id: boxes.length + 1 }]);
    toast({
      title: 'Box Added',
      description: 'A new box has been added to your shipment.',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: 'Calculating Shipping Price',
      description: 'Please wait while we calculate the best rates for you...',
    });
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Calculate Your Shipping Price
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Form */}
          <Card className="shadow-xl">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Shipping Method</Label>
                    <Select defaultValue="surface">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="surface">Surface</SelectItem>
                        <SelectItem value="express">Express</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Status</Label>
                    <Select defaultValue="forward">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="forward">Forward</SelectItem>
                        <SelectItem value="rto">RTO</SelectItem>
                        <SelectItem value="reverse">Reverse</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Origin Pincode</Label>
                    <Input placeholder="Ex. 819210" />
                  </div>
                  <div>
                    <Label>Destination Pincode</Label>
                    <Input placeholder="Ex. 845401" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>COD Amount</Label>
                    <Input type="number" placeholder="0" />
                  </div>
                  <div>
                    <Label>Payment Mode</Label>
                    <Select defaultValue="cod">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cod">COD</SelectItem>
                        <SelectItem value="prepaid">Prepaid</SelectItem>
                        <SelectItem value="pickup">Pickup</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Shipment Type</Label>
                    <Select defaultValue="b2c">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="b2c">B2C</SelectItem>
                        <SelectItem value="b2b">B2B</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Invoice Amount</Label>
                    <Input type="number" placeholder="0" />
                  </div>
                </div>

                <div className="grid grid-cols-5 gap-2">
                  <div>
                    <Label>Weight</Label>
                    <Input type="number" placeholder="0" />
                  </div>
                  <div>
                    <Label>W unit</Label>
                    <Select defaultValue="g">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="g">g</SelectItem>
                        <SelectItem value="kg">kg</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>L (cm)</Label>
                    <Input type="number" placeholder="0" />
                  </div>
                  <div>
                    <Label>B (cm)</Label>
                    <Input type="number" placeholder="0" />
                  </div>
                  <div>
                    <Label>H (cm)</Label>
                    <Input type="number" placeholder="0" />
                  </div>
                </div>

                <div>
                  <Label>Count</Label>
                  <Input type="number" placeholder="Ex. 2.5" />
                </div>

                <div className="flex gap-4 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    className="flex-1 border-emerald-500 text-emerald-600 hover:bg-emerald-50"
                    onClick={addMoreBoxes}
                  >
                    Add More Boxes
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white"
                  >
                    Submit and Compare
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Illustration */}
          <div className="hidden lg:flex items-center justify-center">
            <img
              src="https://illustrations.popsy.co/amber/logistics.svg"
              alt="Delivery"
              className="w-full max-w-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShippingCalculator;