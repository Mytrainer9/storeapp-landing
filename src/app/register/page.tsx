"use client";
import { useState } from "react";
import { Zap, ArrowRight, Loader2, CheckCircle } from "lucide-react";

export default function RegisterPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", business: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/register", {
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

      {/* Form */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          {status === "success" ? (
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={32} className="text-emerald-500" />
              </div>
              <h1 className="text-2xl font-extrabold text-gray-900 mb-3">Бүртгэл амжилттай!</h1>
              <p className="text-gray-500 mb-8">
                Таны мэдээлэл илгээгдлээ. Бид тантай удахгүй холбогдоно.
              </p>
              <a href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-violet-600 hover:text-violet-700">
                Нүүр хуудас руу буцах
              </a>
            </div>
          ) : (
            <>
              <div className="text-center mb-8">
                <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Бүртгүүлэх</h1>
                <p className="text-gray-500">AI борлуулагчаа эхлүүлэхэд бэлэн үү?</p>
              </div>

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
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Утасны дугаар</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    placeholder="9911 2233"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Бизнесийн нэр</label>
                  <input
                    type="text"
                    required
                    value={form.business}
                    onChange={(e) => update("business", e.target.value)}
                    placeholder="Дэлгүүрийн нэр"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-red-500 bg-red-50 px-4 py-2.5 rounded-xl">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full flex items-center justify-center gap-2 bg-gray-900 text-white font-semibold text-sm py-3.5 rounded-xl hover:bg-gray-800 transition-colors disabled:opacity-60 disabled:cursor-not-allowed mt-2"
                >
                  {status === "loading" ? (
                    <><Loader2 size={16} className="animate-spin" /> Илгээж байна...</>
                  ) : (
                    <>Бүртгүүлэх <ArrowRight size={14} /></>
                  )}
                </button>
              </form>

              <p className="text-center text-sm text-gray-400 mt-6">
                Бүртгэлтэй юу?{" "}
                <a href="/login/" className="text-violet-600 font-semibold hover:text-violet-700">Нэвтрэх</a>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
