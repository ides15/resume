import { execSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";
import react from "@vitejs/plugin-react";
import { load } from "js-yaml";
import { defineConfig } from "vite";
import { z } from "zod";

const resumeSchema = z.object({
  name: z.string(),
  location: z.string(),
  email: z.email(),
  phone: z.string(),
  links: z.array(
    z.object({
      icon: z.string(),
      url: z.url(),
      display: z.string(),
    }),
  ),
  summary: z.string(),
  skills: z.array(
    z.object({
      category: z.string(),
      items: z.array(z.string()),
    }),
  ),
  experience: z.array(
    z.object({
      logo: z.string(),
      title: z.string(),
      company: z.string(),
      duration: z.string(),
      location: z.string(),
      bullets: z.array(
        z.union([
          z.string(),
          z.object({
            text: z.string(),
            subitems: z.array(z.string()),
          }),
        ]),
      ),
    }),
  ),
  education: z.array(
    z.object({
      degree: z.string(),
      minor: z.string().optional(),
      school: z.string(),
      year: z.string(),
    }),
  ),
  certifications: z
    .array(
      z.object({
        name: z.string(),
        dates: z.string(),
      }),
    )
    .optional(),
});

function buildData() {
  const yaml = readFileSync("content.yaml", "utf8");
  const data = resumeSchema.parse(load(yaml));
  const output = `export const resumeData = ${JSON.stringify(data, null, 2)} as const;`;
  writeFileSync("data.ts", output);
}

function buildAll() {
  buildData();
  execSync("pnpm dlx @tailwindcss/cli -i input.css -o tailwind.css", {
    stdio: "inherit",
  });
}

export default defineConfig({
  plugins: [
    {
      name: "watch-yaml",
      configureServer(server) {
        server.watcher.add("content.yaml");
        server.watcher.on("change", (file) => {
          if (file.endsWith("content.yaml")) {
            buildData();
            server.ws.send({ type: "full-reload" });
          }
        });
      },
      buildStart() {
        buildAll();
      },
    },
    react(),
  ],
});
