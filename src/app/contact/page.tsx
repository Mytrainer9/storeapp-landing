"use client";
import { useState } from "react";
import { Zap, Mail, Phone, MapPin, Send, Loader2, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Алдаа гарлаа. Дахин оролдоно уу.");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Алдаа гарлаа.");
    }
  };

  const update = (field: string, value: string) => setForm((f) => ({ ...f, [field]: value }));

  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50/60 via-white to-white flex flex-col">
      {/* Header */}
      <div className="px-6 py-5">
        <a href="/" className="inline-flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center">
            <Zap size={14} className="text-white" fill="white" />
          </div>
          <span className="font-extrabold text-lg text-gray-900 tracking-tight">
            Store<span className="text-violet-600">App</span>
          </span>
        </a>
      </div>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">Холбоо барих</h1>
            <p className="text-gray-500 max-w-md mx-auto">Та суултаа илгээгээрэй. Бид тантай удахгүй холбогдоно.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-lg shadow-gray-200/30 p-8">
                <h2 className="text-lg font-bold text-gray-900 mb-6">Мэдээлэл</h2>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center shrink-0">
                      <Mail size={18} className="text-violet-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Имэйл</p>
                      <a href="mailto:info@storeapp.us" className="text-sm text-gray-500 hover:text-violet-600 transition-colors">info@storeapp.us</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center shrink-0">
                      <Phone size={18} className="text-violet-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Утас</p>
                      <a href="tel:+976 60356363" className="text-sm text-gray-500 hover:text-violet-600 transition-colors">+976 9911 2233</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center shrink-0">
                      <MapPin size={18} className="text-violet-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Хаяг</p>
                      <p className="text-sm text-gray-500">Улаанбаатар, Монгол Хан-Уул дүүрэг 23-Р хороо IC Tower</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 rounded-2xl p-8 text-center">
                <p className="text-white font-bold mb-2">Шууд эхлэхийг хүсч байна уу?</p>
                <p className="text-gray-400 text-sm mb-5">Үнэгүй бүртгүүлээд AI борлуулагчаа туршаарай.</p>
                <a href="/register/" className="inline-flex items-center gap-2 bg-white text-gray-900 font-semibold text-sm px-6 py-2.5 rounded-xl hover:bg-gray-100 transition-colors">
                  Бүртгүүлэх <Send size={14} />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-lg shadow-gray-200/30 p-8">
              {status === "success" ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center mb-5">
                    <CheckCircle size={28} className="text-emerald-500" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">Илгээгдлээ!</h2>
                  <p className="text-gray-500 text-sm mb-6">Таны мессеж амжилттай илгээгдлээ. Бид тантай удахгүй холбогдоно.</p>
                  <a href="/" className="text-sm font-semibold text-violet-600 hover:text-violet-700">Нүүр хуудас руу буцах</a>
                </div>
              ) : (
                <>
                  <h2 className="text-lg font-bold text-gray-900 mb-6">Мессеж илгээх</h2>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Нэр</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                        placeholder="Таны нэр"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Имэйл</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Мессеж</label>
                      <textarea
                        required
                        rows={4}
                        value={form.message}
                        onChange={(e) => update("message", e.target.value)}
                        placeholder="Таны мессеж..."
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all resize-none"
                      />
                    </div>

                    {status === "error" && (
                      <p className="text-sm text-red-500 bg-red-50 px-4 py-2.5 rounded-xl">{errorMsg}</p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full flex items-center justify-center gap-2 bg-gray-900 text-white font-semibold text-sm py-3.5 rounded-xl hover:bg-gray-800 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === "loading" ? (
                        <><Loader2 size={16} className="animate-spin" /> Илгээж байна...</>
                      ) : (
                        <>Илгээх <Send size={14} /></>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
