import { BrowserAgent } from "@newrelic/browser-agent/loaders/browser-agent";

const options = {
  init: {
    session_replay: {
      enabled: true,
      block_selector: "",
      mask_text_selector: "*",
      sampling_rate: 10.0,
      error_sampling_rate: 100.0,
      mask_all_inputs: true,
      collect_fonts: true,
      inline_images: false,
      inline_stylesheet: true,
      mask_input_options: {},
    },
    distributed_tracing: { enabled: true },
    privacy: { cookies_enabled: true },
  },
  info: (window as any).NREUM?.info,
  loader_config: (window as any).NREUM?.loader_config,
};

(options.info && new BrowserAgent(options)) ||
  console.log("Newrelic not started");
