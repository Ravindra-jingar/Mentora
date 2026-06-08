import { Settings as SettingsIcon } from "lucide-react";

function Settings() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center p-6 bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#020617]">
      <div className="w-full max-w-3xl">
        <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 p-8 text-white text-center">
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center">
                <SettingsIcon size={40} />
              </div>
            </div>

            <h1 className="text-3xl font-bold">Settings</h1>
            <p className="mt-2 text-indigo-100">
              Customize your platform preferences and system configuration.
            </p>
          </div>

          {/* Content */}
          <div className="p-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 font-medium mb-6">
              🚧 Under Development
            </div>

            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
              Coming Soon
            </h2>

            <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto mb-8">
              We're working on a powerful settings module that will allow
              administrators to manage platform preferences, notifications,
              security options, branding, and more.
            </p>

            {/* Future Features */}
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800">
                <h3 className="font-semibold mb-2">🔐 Security Settings</h3>
                <p className="text-sm text-slate-500">
                  Change passwords and manage account security.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800">
                <h3 className="font-semibold mb-2">📧 Email Configuration</h3>
                <p className="text-sm text-slate-500">
                  Configure email notifications and alerts.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800">
                <h3 className="font-semibold mb-2">🎨 Branding</h3>
                <p className="text-sm text-slate-500">
                  Update logo, colors, and organization details.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800">
                <h3 className="font-semibold mb-2">🌐 System Preferences</h3>
                <p className="text-sm text-slate-500">
                  Manage application-wide configurations.
                </p>
              </div>
            </div>

            <button
              className="mt-8 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium transition"
              disabled
            >
              Feature Coming Soon
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;