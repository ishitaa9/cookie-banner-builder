import { useBannerStore } from "../store/useBannerStore";
import { motion, AnimatePresence } from "framer-motion";

export default function LivePreview() {
  const { config, hasAccepted, setHasAccepted } = useBannerStore();

  return (
    <AnimatePresence mode="wait">
      {hasAccepted === null ? (
        <motion.div
          key="banner"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-4 left-4 right-4 md:max-w-md md:mx-auto p-4 rounded shadow-md"
          style={{
            backgroundColor: config.backgroundColor,
            color: config.textColor,
          }}
        >
          <h3 className="text-lg font-semibold">{config.title}</h3>
          <p className="text-sm">{config.description}</p>

          <div className="flex space-x-4 mt-4">
            <button
              className="px-4 py-2 rounded bg-green-500 text-white text-sm hover:bg-green-600 transition"
              onClick={() => setHasAccepted(true)}
            >
              {config.acceptText}
            </button>
            <button
              className="px-4 py-2 rounded bg-gray-300 text-gray-800 text-sm hover:bg-gray-400 transition"
              onClick={() => setHasAccepted(false)}
            >
              {config.declineText}
            </button>
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="result"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="text-center text-sm text-gray-500 italic mt-4"
        >
          {hasAccepted ? "✅" : "❌"} User has {hasAccepted ? "accepted" : "declined"} cookies.
        </motion.div>
      )}
    </AnimatePresence>
  );
}
