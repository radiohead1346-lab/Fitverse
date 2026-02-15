// This acts as your temporary PostgreSQL database
export const mockDB = {
  categories: [
    { id: 1, name: "Cardio Equipment", slug: "cardio" },
    { id: 2, name: "Strength Training", slug: "strength" },
    { id: 3, name: "Free Weights", slug: "free-weights" },
    { id: 4, name: "Functional Fitness", slug: "functional" },
    { id: 5, name: "Mats & Flooring", slug: "flooring" },
    { id: 6, name: "Apparel & Wearables", slug: "wearables" }
  ],
  blogs: [
    {
       id: 1,
       title: "5 Gym Hacks That Save Money",
       slug: "gym-hacks-save-money",
       snippet: "Stop buying expensive gear. Here is how to build a rack for under $50 using standard pipes, plus tips on finding used weights.",
       content: `Building a home gym doesn't have to drain your bank account. In fact, some of the best setups start with a bit of creativity and elbow grease. Here are our top 5 hacks for saving thousands on gear.

1. The DIY Pipe Pull-Up Bar
Instead of spending $150 on a branded pull-up bar, head to your local hardware store. You can construct a sturdy, industrial-looking bar using 3/4-inch galvanized steel pipes and floor flanges. Mount it into the studs of your garage wall, and it will hold more weight than most door-frame bars.

2. Stall Mats vs. "Gym Flooring"
If you search for "gym flooring," you will pay a "fitness tax." Instead, search for "horse stall mats" at a farm supply store. A 4x6 foot, 3/4-inch thick rubber mat usually costs around $50. It’s the exact same material as commercial gym flooring but half the price.

3. The Used Market is Gold
Weights don’t expire. A 45lb cast iron plate from 1990 weighs the exact same as one made today. Check Facebook Marketplace or Craigslist for people moving houses. You can often find iron plates for less than $1 per pound, whereas new ones can cost $2-$3 per pound.

4. Build Your Own Plyo Box
A wooden plyometric box can cost upwards of $100. With a single sheet of 3/4-inch plywood and some wood glue, you can build a 3-in-1 box (20", 24", 30") for about $40. There are plenty of free blueprints available online.

5. Use Bands for Resistance
If you can't afford a full dumbbell rack yet, buy a set of high-quality resistance bands. They can simulate cable machines, add resistance to pushups, and help with mobility work—all for under $30.`,
       author: "Coach Mike",
       date: "Oct 12, 2025"
    },
    {
       id: 2,
       title: "Creatine vs. Whey: What Do You Need?",
       slug: "creatine-vs-whey",
       snippet: "The ultimate showdown between the two most popular supplements in history. We break down the science of performance vs. recovery.",
       content: `Walk into any supplement store, and you are bombarded with choices. But if you had to pick just two, Creatine Monohydrate and Whey Protein are the undisputed kings. But do you need both? Let's break it down.

What is Whey Protein?
Whey is simply a convenient source of high-quality protein derived from milk. It is not magic; it’s food.
 Purpose: Muscle Repair & Recovery.
 Who needs it: Anyone struggling to hit their daily protein goal (usually 0.8g - 1g per lb of bodyweight) through whole foods alone.
 Timing: Ideally post-workout for fast absorption, but anytime works.

What is Creatine?
Creatine is a molecule found naturally in meat and fish that helps your body produce energy during heavy lifting or high-intensity exercise.
 Purpose: Increased Strength, Power, and Muscle Volume.
 Who needs it: Almost everyone. It is the most researched supplement in history for improving performance.
 Timing: Doesn't matter. Just take 5g every day.

The Verdict?
They do completely different things. Whey helps you recover from the workout; Creatine helps you perform better during the workout. If you are on a tight budget, prioritize Creatine (it’s cheaper and harder to get from food). If you struggle to eat enough meat/eggs, prioritize Whey. Ideally? Take both.`,
       author: "Dr. Sarah Fit",
       date: "Nov 05, 2025"
    },
    {
       id: 3,
       title: "The $500 Home Gym Blueprint",
       slug: "500-dollar-home-gym",
       snippet: "You don't need a commercial facility. Here is the exact shopping list for a complete garage gym on a tight budget.",
       content: `Can you really build a functional gym for $500? In 2025, it’s tough, but possible if you make smart compromises. This setup won't be fancy, but it will get you strong.

1. The Barbell ($150)
Do not skimp here. A cheap bar will bend and possibly hurt you. Look for a decent entry-level bushing bar from brands like Titan Fitness or Rep Fitness (B-stock sales are great for this).
 Budget: $150

2. Plates ($150 - Used)
You need weight to put on that bar. You likely can't afford brand new bumpers. Scour the used market for 2x45s, 2x25s, 2x10s, and 2x5s. That gives you 205 lbs of total weight (including the bar).
 Budget: $150 (approx. $0.80/lb used)

3. Squat Stand ($120)
You can't afford a full power cage. Look for independent squat stands or a simple half-rack. Ensure it has a weight capacity of at least 500 lbs.
 Budget: $120

4. Flat Bench ($60)
Forget the adjustable bench for now. Get a solid, flat utility bench. It’s cheaper, more stable, and safer for bench pressing alone. Amazon Basics or similar brands offer sturdy options in this range.
 Budget: $60

5. Flooring ($20)
You can't afford full mats yet. Buy 4 cheap puzzle tiles just to protect the floor where you drop the deadlifts.
 Budget: $20

Total: $500
This setup allows you to Squat, Bench, Deadlift, and Overhead Press. That is 90% of your gains right there.`,
       author: "Fitverse Team",
       date: "Jan 15, 2026"
    },
    {
       id: 4,
       title: "Why Your Bench Press Isn't Increasing",
       slug: "fix-your-bench-press",
       snippet: "Stuck at a plateau? You are probably making one of these 3 common technical errors that kill your power transfer.",
       content: `The bench press is the ego lift of choice, but it's also highly technical. If you've been stuck at the same weight for months, it's rarely a lack of strength—it's a leak in your power. Here are the 3 most common fixes.

1. You're Not Retracting Your Scapula
If your back is flat against the bench, you are unstable. Before you even unrack the bar, pinch your shoulder blades together as if you are trying to hold a pencil between them. Keep them pinched the entire set. This creates a stable shelf and protects your shoulders.

2. Your Wrists are Bent Back
Look at your wrists. Are they bent back like a waiter holding a tray? This transfers energy into your wrist joint instead of the bar. Roll your knuckles forward so the bar sits directly over your forearm bone. This small change can instantly add 10 lbs to your press.

3. No Leg Drive
Bench press is a full-body exercise. Your feet should be planted firmly on the ground. As you press the bar up, push hard into the floor with your legs (without lifting your butt off the bench). This leg drive transfers force through your rigid torso and into the bar.

Try these cues on your next push day and watch the weight fly up.`,
       author: "Coach Mike",
       date: "Jan 28, 2026"
    },
    {
       id: 5,
       title: "Cardio: High Intensity vs. Low Impact",
       slug: "hiit-vs-liss",
       snippet: "Should you sprint or walk? We analyze which method burns fat faster and preserves muscle.",
       content: `The cardio debate is endless. One camp swears by 15-minute vomit-inducing sprints (HIIT), while the other walks on an incline for an hour (LISS). Which one burns more fat?

HIIT (High-Intensity Interval Training)
Think sprinting for 30 seconds, walking for 30 seconds, repeated for 15 minutes.
 Pros: Burns a lot of calories in a short time. Creates an "afterburn" effect (EPOC) where you burn calories for hours after.
 Cons: Extremely taxing on the nervous system. Can interfere with leg recovery for lifting. High impact on joints.

LISS (Low-Intensity Steady State)
Think walking on a treadmill at a 3mph pace with a slight incline for 45 minutes.
 Pros: Very easy to recover from. Doesn't hurt your lifting gains. Relaxing (you can listen to a podcast).
 Cons: Takes a long time. Burns fewer calories per minute.

The Verdict
If you are a heavy lifter who squats and deadlifts heavy, choose LISS. HIIT adds too much fatigue to your legs and can lead to overtraining. LISS helps flush blood into the legs without damage.

If you are short on time and want maximum conditioning, choose HIIT—but limit it to 2 sessions a week to save your joints.`,
       author: "Dr. Sarah Fit",
       date: "Feb 02, 2026"
    }
  ]
};

