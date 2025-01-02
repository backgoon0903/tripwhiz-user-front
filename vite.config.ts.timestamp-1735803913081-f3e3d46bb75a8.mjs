// vite.config.ts
import { defineConfig } from "file:///C:/kdt/tripwhiz-user-front/node_modules/vite/dist/node/index.js";
import react from "file:///C:/kdt/tripwhiz-user-front/node_modules/@vitejs/plugin-react-swc/index.mjs";
import { VitePWA } from "file:///C:/kdt/tripwhiz-user-front/node_modules/vite-plugin-pwa/dist/index.js";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    VitePWA({
      injectRegister: "auto",
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
      manifest: {
        name: "TripWhiz",
        short_name: "TripWhiz",
        description: "TripWhiz PWA",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        prefer_related_applications: true,
        lang: "ko",
        display: "standalone",
        icons: [
          {
            src: "192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any"
          }
        ]
      }
    })
  ],
  server: {
    proxy: {
      "/api/shop": {
        target: "https://tripwhiz.shop",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/shop/, "/api")
      },
      "/api/store": {
        target: "https://tripwhiz.store",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/store/, "/api")
      }
    }
  }
  // 이 중괄호가 server 객체를 닫습니다.
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxrZHRcXFxcdHJpcHdoaXotdXNlci1mcm9udFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxca2R0XFxcXHRyaXB3aGl6LXVzZXItZnJvbnRcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L2tkdC90cmlwd2hpei11c2VyLWZyb250L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0LXN3YydcclxuaW1wb3J0IHsgVml0ZVBXQSB9IGZyb20gXCJ2aXRlLXBsdWdpbi1wd2FcIjtcclxuXHJcbi8vIGh0dHBzOi8vdml0ZS5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtcclxuICAgIHJlYWN0KCksXHJcbiAgICBWaXRlUFdBKHtcclxuICAgICAgaW5qZWN0UmVnaXN0ZXI6ICdhdXRvJyxcclxuICAgICAgcmVnaXN0ZXJUeXBlOiAnYXV0b1VwZGF0ZScsXHJcbiAgICAgIGluY2x1ZGVBc3NldHM6IFsnZmF2aWNvbi5pY28nLCAnYXBwbGUtdG91Y2gtaWNvbi5wbmcnLCAnbWFza2VkLWljb24uc3ZnJ10sXHJcbiAgICAgIG1hbmlmZXN0OiB7XHJcbiAgICAgICAgbmFtZTogJ1RyaXBXaGl6JyxcclxuICAgICAgICBzaG9ydF9uYW1lOiAnVHJpcFdoaXonLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVHJpcFdoaXogUFdBJyxcclxuICAgICAgICB0aGVtZV9jb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgICAgIGJhY2tncm91bmRfY29sb3I6ICcjZmZmZmZmJyxcclxuICAgICAgICBwcmVmZXJfcmVsYXRlZF9hcHBsaWNhdGlvbnM6IHRydWUsXHJcbiAgICAgICAgbGFuZzogJ2tvJyxcclxuICAgICAgICBkaXNwbGF5OiAnc3RhbmRhbG9uZScsXHJcbiAgICAgICAgaWNvbnM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgc3JjOiAnMTkyLnBuZycsXHJcbiAgICAgICAgICAgIHNpemVzOiAnMTkyeDE5MicsXHJcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBzcmM6ICc1MTIucG5nJyxcclxuICAgICAgICAgICAgc2l6ZXM6ICc1MTJ4NTEyJyxcclxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXHJcbiAgICAgICAgICAgIHB1cnBvc2U6ICdhbnknXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIF0sXHJcbiAgc2VydmVyOiB7XHJcbiAgICBwcm94eToge1xyXG4gICAgICAnL2FwaS9zaG9wJzoge1xyXG4gICAgICAgIHRhcmdldDogJ2h0dHBzOi8vdHJpcHdoaXouc2hvcCcsXHJcbiAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxyXG4gICAgICAgIHJld3JpdGU6IChwYXRoOiBzdHJpbmcpID0+IHBhdGgucmVwbGFjZSgvXlxcL2FwaVxcL3Nob3AvLCAnL2FwaScpXHJcbiAgICAgIH0sXHJcbiAgICAgICcvYXBpL3N0b3JlJzoge1xyXG4gICAgICAgIHRhcmdldDogJ2h0dHBzOi8vdHJpcHdoaXouc3RvcmUnLFxyXG4gICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcclxuICAgICAgICByZXdyaXRlOiAocGF0aDogc3RyaW5nKSA9PiBwYXRoLnJlcGxhY2UoL15cXC9hcGlcXC9zdG9yZS8sICcvYXBpJylcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0gLy8gXHVDNzc0IFx1QzkxMVx1QUQwNFx1RDYzOFx1QUMwMCBzZXJ2ZXIgXHVBQzFEXHVDQ0I0XHVCOTdDIFx1QjJFQlx1QzJCNVx1QjJDOFx1QjJFNC5cclxufSk7IC8vIFx1Qzc3NCBcdUM5MTFcdUFEMDRcdUQ2MzhcdUFDMDAgXHVDODA0XHVDQ0I0IFx1QzEyNFx1QzgxNVx1Qzc0NCBcdUIyRUJcdUMyQjVcdUIyQzhcdUIyRTQuXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBc1EsU0FBUyxvQkFBb0I7QUFDblMsT0FBTyxXQUFXO0FBQ2xCLFNBQVMsZUFBZTtBQUd4QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsTUFDTixnQkFBZ0I7QUFBQSxNQUNoQixjQUFjO0FBQUEsTUFDZCxlQUFlLENBQUMsZUFBZSx3QkFBd0IsaUJBQWlCO0FBQUEsTUFDeEUsVUFBVTtBQUFBLFFBQ1IsTUFBTTtBQUFBLFFBQ04sWUFBWTtBQUFBLFFBQ1osYUFBYTtBQUFBLFFBQ2IsYUFBYTtBQUFBLFFBQ2Isa0JBQWtCO0FBQUEsUUFDbEIsNkJBQTZCO0FBQUEsUUFDN0IsTUFBTTtBQUFBLFFBQ04sU0FBUztBQUFBLFFBQ1QsT0FBTztBQUFBLFVBQ0w7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFlBQ04sU0FBUztBQUFBLFVBQ1g7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLE9BQU87QUFBQSxNQUNMLGFBQWE7QUFBQSxRQUNYLFFBQVE7QUFBQSxRQUNSLGNBQWM7QUFBQSxRQUNkLFNBQVMsQ0FBQyxTQUFpQixLQUFLLFFBQVEsZ0JBQWdCLE1BQU07QUFBQSxNQUNoRTtBQUFBLE1BQ0EsY0FBYztBQUFBLFFBQ1osUUFBUTtBQUFBLFFBQ1IsY0FBYztBQUFBLFFBQ2QsU0FBUyxDQUFDLFNBQWlCLEtBQUssUUFBUSxpQkFBaUIsTUFBTTtBQUFBLE1BQ2pFO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQTtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
