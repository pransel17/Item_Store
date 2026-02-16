# Product-Store
 Practice project 

Tech Stack: MERN (MongoDB, Express.js, React with Vite, Node.js) + Chakra UI + React Router + React Icons)

Maintenance: To keep the application running 24/7 and bypass free-tier limitations with mongodb. 

Backend (onRender): Render's free tier spins down after 15 minutes of silence. To prevent this, an external cron job is configured.

Tool: cron-job.org.

    Purpose: Constant pings prevent Render from sleeping and ensure MongoDB remains active due to consistent connection traffic.

