import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-http";
import { registerInstrumentations } from "@opentelemetry/instrumentation";
import { DocumentLoadInstrumentation } from "@opentelemetry/instrumentation-document-load";
import { FetchInstrumentation } from "@opentelemetry/instrumentation-fetch";
import { Resource } from "@opentelemetry/resources";
import { BatchSpanProcessor } from "@opentelemetry/sdk-trace-base";
import { WebTracerProvider } from "@opentelemetry/sdk-trace-web";

const provider = new WebTracerProvider({
  resource: new Resource({
    "service.name": "react-jaeger-demo",
  }),
});

const exporter = new OTLPTraceExporter({
  url: "http://localhost:4318/v1/traces",
});

provider.addSpanProcessor(new BatchSpanProcessor(exporter));

provider.register();

registerInstrumentations({
  instrumentations: [
    new FetchInstrumentation(),
    new DocumentLoadInstrumentation(),
  ],
});
