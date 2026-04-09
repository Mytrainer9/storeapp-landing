"use client";
import { Zap, ArrowRight, Shield } from "lucide-react";

export default function LoginPage() {
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
        <div className="w-full max-w-sm">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-xl shadow-gray-200/40 p-8 text-center">
            <div className="w-14 h-14 rounded-2xl bg-violet-50 flex items-center justify-center mx-auto mb-6">
              <Shield size={24} className="text-violet-600" />
            </div>

            <h1 className="text-2xl font-extrabold text-gray-900 mb-2">Нэвтрэх</h1>
            <p className="text-gray-400 text-sm mb-8">Биднийг сонгосонд баярлалаа.</p>

            <a
              href="https://ai.storeapp.us/seller/login.html"
              className="w-full flex items-center justify-center gap-2 bg-gray-900 text-white font-semibold text-sm py-3.5 rounded-xl hover:bg-gray-800 transition-colors"
            >
              Нэвтрэх <ArrowRight size={14} />
            </a>

            <div className="mt-6 pt-6 border-t border-gray-100">
              <p className="text-sm text-gray-400">
                Бүртгэлгүй юу?{" "}
                <a href="/register/" className="text-violet-600 font-semibold hover:text-violet-700">Бүртгүүлэх</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
