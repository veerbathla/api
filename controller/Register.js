const database = require('../database/db');
const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { 
        user: "veerbathla676676@gmail.com",
        pass:"ypmzlsyururuggil",
    },
});
const register=async(req,res)=>{
    try{
        console.log(req.body);
        const db=await database();
        const collection=db.collection("Login");
        const user=await collection.insertOne(req.body);
        if(user.acknowledged==true)
        {
            await sendMail({
                to: req.body.email,
                subject: "Registration Successful",
                text: `Hello ${req.body.username},\n\nYour registration was successful!\n\nThank you for joining us.\n\nBest regards,\nTeam`,
                html:`<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>For My Big Brother — A Very Serious (Not Serious) Letter</title>
  <style>
    /* Reset */
    body, html, table, td, a { -webkit-text-size-adjust:100%; -ms-text-size-adjust:100%; }
    body { margin:0; padding:0; width:100% !important; -webkit-font-smoothing:antialiased; background: #f4f6f9; }
    img { border:0; line-height:100%; outline:none; text-decoration:none; display:block; max-width:100%; height:auto; }

    /* Container */
    .email-wrap { width:100%; max-width:720px; margin:32px auto; background: linear-gradient(135deg,#fffefc 0%, #fff 50%); border-radius:18px; box-shadow:0 10px 30px rgba(10,20,40,0.08); overflow:hidden; font-family: 'Helvetica Neue', Arial, sans-serif; color:#1f2937; }

    /* Header */
    .hero { padding:36px 28px; background:
      radial-gradient(circle at 10% 10%, rgba(255,215,0,0.12), transparent 6%),
      linear-gradient(180deg, rgba(255,243,224,0.7), rgba(255,248,240,0.4));
      text-align:center;
    }
    .badge { display:inline-block; padding:8px 14px; background:#fff; border-radius:999px; font-weight:700; color:#7c3aed; box-shadow:0 6px 18px rgba(124,58,237,0.08); margin-bottom:12px; }
    h1 { font-size:28px; margin:8px 0 6px; letter-spacing:-0.5px; color:#111827; }
    p.lead { margin:0; color:#374151; font-size:15px; opacity:0.95; }

    /* Main content */
    .content { padding:28px; font-size:15px; line-height:1.5; color:#334155; }
    .big-line { font-size:18px; font-weight:700; margin:12px 0; color:#0f172a; }
    .fun { font-style:italic; color:#6b7280; }

    /* Quote / callout */
    .callout { margin:18px 0; padding:16px; background:linear-gradient(90deg,#fffbeb, #fff7ed); border-left:6px solid #f97316; border-radius:8px; color:#92400e; }

    /* Heart / stats */
    .stats { display:flex; gap:12px; margin:18px 0; flex-wrap:wrap; }
    .stat { flex:1; min-width:140px; background:#fff; border-radius:10px; padding:12px; text-align:center; box-shadow:0 6px 18px rgba(15,23,42,0.04); }
    .stat .num { font-weight:800; font-size:20px; color:#0b1220; }
    .stat .label { font-size:12px; color:#6b7280; margin-top:6px; }

    /* Footer */
    .footer { padding:20px 28px; background:#f8fafc; text-align:center; color:#475569; font-size:13px; }
    a.btn { display:inline-block; margin-top:12px; padding:12px 18px; border-radius:10px; text-decoration:none; font-weight:700; background:linear-gradient(90deg,#7c3aed,#06b6d4); color:white; box-shadow:0 8px 28px rgba(99,102,241,0.18); }
    .small { font-size:12px; color:#94a3b8; margin-top:10px; }

    /* Responsive */
    @media (max-width:480px){
      h1 { font-size:22px; }
      .email-wrap { margin:16px; border-radius:12px; }
      .stats { flex-direction:column; }
    }

    /* Cute confetti (pure CSS) */
    .confetti {
      position:relative;
      height:8px;
      margin-top:8px;
      overflow:visible;
    }
    .confetti::before, .confetti::after {
      content:"";
      position:absolute;
      top:-8px;
      left:50%;
      width:10px;
      height:10px;
      border-radius:2px;
      transform:translateX(-50%) rotate(25deg);
      background:linear-gradient(135deg,#f43f5e,#fb923c);
      box-shadow:
        -24px 6px #7c3aed,
        22px -2px #06b6d4,
        -48px -4px #84cc16,
        44px 6px #f59e0b;
      opacity:0.9;
    }
  </style>
</head>
<body>
  <center>
    <div class="email-wrap" role="article" aria-label="A playful email for my big brother">
      <div class="hero">
        <div class="badge">For my one-and-only legend</div>
        <h1>Hey {{Sameer Bhaiya}} — the human Himalayan</h1>
        <p class="lead">A totally serious and entirely scientific update from your fan club (me).</p>
        <div class="confetti" aria-hidden="true"></div>
      </div>

      <div class="content">
        <p class="big-line">First things first: important facts.</p>
        <p>
          You are, without question, <strong>very big</strong> — the kind of big that makes doorframes ask for permission. You weigh more than <strong>150 kg</strong> and still carry enough sweetness to feed an army of dessert lovers. Translation: you are enormous in the best possible ways.
        </p>

        <div class="callout">
          <strong>Official roles assigned to you:</strong>
          <ul style="margin:8px 0 0 18px; padding:0; color:#7c2d12;">
            <li>Chief Snack Inspector 🍪</li>
            <li>Personal ATM (only on special occasions) 💸</li>
            <li>Designated hug machine 🤗</li>
          </ul>
        </div>

        <p class="fun">Now for the compliments, because flattery is a national sport in this household.</p>

        <div style="margin-top:10px;">
          <p>You're sweet — like the kind of sweetness that ruins my diet and improves my day. You're rich — may your pockets and your heart never be empty. And you're kind — a walking, talking charity of good advice and terrible jokes.</p>

          <div class="stats" role="list" aria-label="Fun stats about brother">
            <div class="stat" role="listitem">
              <div class="num">150+ kg</div>
              <div class="label">Legendary mass (verified)</div>
            </div>
            <div class="stat" role="listitem">
              <div class="num">∞</div>
              <div class="label">Amount of love you give</div>
            </div>
            <div class="stat" role="listitem">
              <div class="num">100%</div>
              <div class="label">Percentage of my respect (and teasing)</div>
            </div>
          </div>
        </div>

        <p style="margin-top:10px;">
          I am writing this email because the world needs a formal record that: <em>you are awesome, you eat well, and you are my brother</em>. Also, because someone needs to remind you to drink water and not to treat your tummy like a buffet of regrets at 2AM.
        </p>

        <p style="margin-top:8px;">
          PS: If anyone asks, yes — you are big. But more importantly, you are <strong>big-hearted</strong>. The two go together like cake and more cake.
        </p>

        <p style="margin:18px 0 0;">
          Sending this with 1,000 virtual samosas, a ridiculous amount of respect, and a hint of sarcasm.
        </p>

        <p style="margin-top:16px; font-weight:700;">Love (and endless teasing),<br>{{SENDER_NAME}}</p>

        <div style="text-align:center; margin-top:14px;">
          <a class="btn" href="mailto:{{BROTHER_EMAIL}}?subject=From%20your%20fan%20club&body=Hey%20{{BROTHER_NAME}}%2C%0A%0AYou%20got%20mail%20from%20your%20favorite%20sibling!">Reply to your favorite sibling</a>
        </div>

      </div>

      <div class="footer">
        <div>Quick reminders:</div>
        <div class="small">This email contains 0% actual medical advice, 100% sibling bias. If offended, accept this free hug. If amused, forward to friends and claim artistic credit.</div>
        <div style="margin-top:10px; font-size:12px; color:#94a3b8;">Made with ❤️ and excessive admiration.</div>
      </div>
    </div>
  </center>
</body>
</html>

`,
            })
                 console.log("Login Successful");
                 res.send({
                    "status":"Login Successful",
                    "statuscode":200,
                    "data":user
                 })
            
        }
        else
        {
            res.send({
                "status":"User not found",
                "statuscode":404
             })
            }
    }
    catch(err)
    {
        res.send(err);
    }
}
async function sendMail({to,subject,text,html}){
try{
    const info=await transporter.sendMail({
        from:`veerbathla676676@gmail.com`,
        to,
        text,
        html,
});
console.log("Mail sent: ",info.messageId);
}catch(err){
    console.log("Error sending mail: ",err);
}
}
module.exports={register}