"use client";
import React, { useState } from "react";
import { z } from "zod";

const Home = () => {
  const [formData, setFormData] = useState({
    id: "",
    firstName: "",
    lastName: "",
    date: "",
    email: "",
  });

  const [errors, setErrors] = useState<Record<keyof typeof formData, string>>({
    id: "",
    firstName: "",
    lastName: "",
    date: "",
    email: "",
  });

  const userSchema = z.object({
    id: z
      .string()
      .length(9, { message: "תעודת הזהות חייבת להיות באורך 9 ספרות" }),
    firstName: z
      .string()
      .min(2, { message: "שם פרטי חייב להכיל לפחות 2 תווים" }),
    lastName: z
      .string()
      .min(2, { message: "שם משפחה חייב להכיל לפחות 2 תווים" }),
    date: z
      .preprocess((val) => (val ? new Date(val as string) : undefined), z.date())
      .refine((date) => date < new Date(), { message: "תאריך לידה חייב להיות תאריך מהעבר" }),
    email: z.string().email({ message: "אימייל לא חוקי" }),
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      userSchema.parse(formData);
      console.log("נתונים נכונים", formData);
      alert("הנתונים נשלחו בהצלחה");
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<keyof typeof formData, string> = {
          id: "",
          firstName: "",
          lastName: "",
          date: "",
          email: "",
        };
        error.errors.forEach((err) => {
          const field = err.path[0] as keyof typeof formData;
          newErrors[field] = err.message;
        });
        setErrors(newErrors);
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-2xl">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-right">פרטים אישיים</h2>

        <div className="flex gap-4 mb-4">
          <div className="w-1/2">
            <label className="block text-gray-700 text-sm font-bold mb-2 text-right">
              שם פרטי
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="שם פרטי"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-right"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm text-right">{errors.firstName}</p>
            )}
          </div>
          <div className="w-1/2">
            <label className="block text-gray-700 text-sm font-bold mb-2 text-right">
              שם משפחה
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="שם משפחה"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-right"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm text-right">{errors.lastName}</p>
            )}
          </div>
        </div>

        <div className="flex gap-4 mb-4">
          <div className="w-1/2">
            <label className="block text-gray-700 text-sm font-bold mb-2 text-right">
              תעודת זהות
            </label>
            <input
              type="text"
              name="id"
              value={formData.id}
              onChange={handleInputChange}
              placeholder="תעודת זהות"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-right"
            />
            {errors.id && (
              <p className="text-red-500 text-sm text-right">{errors.id}</p>
            )}
          </div>
          <div className="w-1/2">
            <label className="block text-gray-700 text-sm font-bold mb-2 text-right">
              תאריך לידה
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-right"
            />
            {errors.date && (
              <p className="text-red-500 text-sm text-right">{errors.date}</p>
            )}
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-right">פרטי התקשרות</h2>

        <div className="flex gap-4 mb-6">
          <div className="w-full">
            <label className="block text-gray-700 text-sm font-bold mb-2 text-right">
              מייל
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="כתובת דואל"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-right"
            />
            {errors.email && (
              <p className="text-red-500 text-sm text-right">{errors.email}</p>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 focus:outline-none"
        >
          שלח
        </button>
      </form>
    </div>
  );
};

export default Home;
