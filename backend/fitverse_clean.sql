--
-- PostgreSQL database dump
--

\restrict 4GcAycBqgVj2fLd1K7GLqPTIneIBILWJyCuGx2BOYt2BIf7LO4CsiBFFeYaVGTx

-- Dumped from database version 18.1
-- Dumped by pg_dump version 18.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: blogs; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.blogs (
    id integer NOT NULL,
    title character varying,
    slug character varying,
    snippet text,
    content text,
    author character varying,
    date character varying
);


--
-- Name: blogs_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.blogs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: blogs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.blogs_id_seq OWNED BY public.blogs.id;


--
-- Name: categories; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.categories (
    id integer NOT NULL,
    name character varying,
    slug character varying
);


--
-- Name: categories_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.categories_id_seq OWNED BY public.categories.id;


--
-- Name: products; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.products (
    id integer NOT NULL,
    name character varying,
    description text,
    price_label character varying,
    image character varying,
    link character varying,
    rating double precision,
    features character varying[],
    category_id integer
);


--
-- Name: products_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: products_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.products_id_seq OWNED BY public.products.id;


--
-- Name: blogs id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.blogs ALTER COLUMN id SET DEFAULT nextval('public.blogs_id_seq'::regclass);


--
-- Name: categories id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.categories ALTER COLUMN id SET DEFAULT nextval('public.categories_id_seq'::regclass);


--
-- Name: products id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public.products_id_seq'::regclass);


--
-- Data for Name: blogs; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.categories (id, name, slug) VALUES (1, 'Cardio Equipment', 'cardio');
INSERT INTO public.categories (id, name, slug) VALUES (2, 'Strength Training', 'strength');
INSERT INTO public.categories (id, name, slug) VALUES (3, 'Free Weights', 'free-weights');
INSERT INTO public.categories (id, name, slug) VALUES (4, 'Functional Fitness', 'functional');
INSERT INTO public.categories (id, name, slug) VALUES (5, 'Mats & Flooring', 'flooring');
INSERT INTO public.categories (id, name, slug) VALUES (6, 'Apparel & Wearables', 'wearables');


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.products (id, name, description, price_label, image, link, rating, features, category_id) VALUES (1, 'NordicTrack T Series Treadmill', 'Expertly engineered fold-up treadmill with 10% incline control and smart response motor.', 'Check Price', 'https://images.unsplash.com/photo-1652364653960-1c23c208ef43?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://www.amazon.com/NordicTrack-T-Series-Treadmills-T-6-5-S/dp/B0193V3DJ6/', 4.5, '{"10% OneTouch Incline Control","Smart Response Motor","SpaceSaver Design with EasyLift Assist"}', 1);
INSERT INTO public.products (id, name, description, price_label, image, link, rating, features, category_id) VALUES (2, 'Concept2 RowErg Indoor Rowing Machine', 'The gold standard in indoor rowing. Built to last a lifetime, low maintenance, and equipped with the trusted PM5 Performance Monitor.', 'Check Price', 'https://m.media-amazon.com/images/I/51hWEGkT0xL._AC_UF1000,1000_QL80_.jpg', 'https://www.amazon.com/Concept2-Model-Indoor-Rowing-Machine/dp/B00NH9WEUA', 4.9, '{"PM5 Performance Monitor included","Air resistance responds to your effort","Separates into two pieces for storage"}', 1);
INSERT INTO public.products (id, name, description, price_label, image, link, rating, features, category_id) VALUES (3, 'Marcy Recumbent Exercise Bike with Resistance ME-709', 'Premium steel construction with a step-through design for easy entry. Features 8 resistance levels and an ultra-functional LCD computer screen.', 'Check Price', 'https://m.media-amazon.com/images/I/615Ix760ejS._AC_SX569_.jpg', 'https://www.amazon.com/Marcy-Recumbent-Adjustable-Resistance-Transport/dp/B00IVF9WL4/', 4.5, '{"Step-Through Design: Easy on and off the equipment","8 Resistance Levels: Magnetic mechanism for smooth difficulty adjustment","Easy-to-Read Screen: Tracks time, speed, distance, and calories burned"}', 1);
INSERT INTO public.products (id, name, description, price_label, image, link, rating, features, category_id) VALUES (4, 'Assault Fitness AirBike Classic', 'A heavy-duty fan bike designed for high-intensity interval training (HIIT). The harder you pedal, the greater the resistance.', 'Check Price', 'https://m.media-amazon.com/images/I/81avLZy-hVL._AC_SX569_.jpg', 'https://www.amazon.com/Assault-Fitness-AirBike-Classic-Black/dp/B00F74RX40', 4.7, '{"Unlimited air resistance","Heavy-duty steel frame construction","Moving arm bars for full-body workout"}', 1);
INSERT INTO public.products (id, name, description, price_label, image, link, rating, features, category_id) VALUES (5, 'Fitness Reality 810XLT Super Max Power Cage', 'A heavy-duty 800lb weight capacity power cage with a large walk-in space. Perfect for squats, bench press, and pull-ups.', 'Check Price', 'https://m.media-amazon.com/images/I/61SJdDPAIlL._AC_SX466_.jpg', 'https://www.amazon.com/Fitness-Reality-810XLT-Super-Power/dp/B01N4I8FOY/', 4.7, '{"800 lbs Weight Capacity: Constructed with 2x2 inch square steel frame","Large Walk-In Space: Plenty of side-to-side movement for squats","Multi-Position Overhead Chin Up/Pull Up Grip Bar"}', 2);
INSERT INTO public.products (id, name, description, price_label, image, link, rating, features, category_id) VALUES (6, 'Adjustable Dumbbell 55LB (Single)', '5-in-1 adjustable dumbbell weight set. Quickly switch from 11 lbs to 55 lbs with a simple turn of the handle. Features a durable tray and anti-slip grip.', 'Check Price', 'https://m.media-amazon.com/images/I/71mnXbSQR-L._AC_SX569_.jpg', 'https://www.amazon.com/Adjustable-Dumbbells-increments-dumbbells-Anti-Slip/dp/B0FYNZQVB9/', 4.6, '{"5-in-1 Adjustable Design: Replaces 5 sets of weights for space saving","1-Second Adjustment: Quickly change weight with a single hand turn","Anti-Slip Handle: Textured grip ensures safety during heavy lifts"}', 2);
INSERT INTO public.products (id, name, description, price_label, image, link, rating, features, category_id) VALUES (7, 'FLYBIRD Adjustable Weight Bench', 'A heavy-duty commercial quality steel bench that adjusts to 7 back positions and 3 seat positions. Folds easily for storage.', 'Check Price', 'https://m.media-amazon.com/images/I/71+PRuGeCkL._AC_SX569_.jpg', 'https://www.amazon.com/FLYBIRD-Weight-Bench-Adjustable-Workout/dp/B07DNYSJ8W/', 4.5, '{"Fast Adjustment: 7 Back Positions & 3 Seat Positions","Heavy-Duty Steel: 800 lbs weight capacity with unique triangular support structure","Foldable Design: Saves 80% space when not in use"}', 2);
INSERT INTO public.products (id, name, description, price_label, image, link, rating, features, category_id) VALUES (8, 'CAP Barbell Olympic 7-Foot Weightlifting Bar', 'The standard for heavy lifting. This 7-foot bar features a medium-depth diamond knurl for a secure grip and rotating sleeves to reduce pressure on wrists.', 'Check Price', 'https://m.media-amazon.com/images/I/61tYbWQSFdL._AC_SX569_.jpg', 'https://www.amazon.com/CAP-Barbell-Olympic-1000-Pound-Capacity/dp/B001K4OPY2/', 4.6, '{"1000 lb Capacity: Built from solid cold rolled steel","Medium Knurling: Provides secure grip without tearing up your hands","Black Oxide Finish: Durable protection against rust and wear"}', 2);
INSERT INTO public.products (id, name, description, price_label, image, link, rating, features, category_id) VALUES (9, 'Amazon Basics Cast Iron Kettlebell - 25 Pounds', 'Solid cast iron kettlebell for swings, deadlifts, and squats. Features a textured wide handle for a comfortable, secure grip and a painted surface for durability.', 'Check Price', 'https://m.media-amazon.com/images/I/71BU2P5yYzL._AC_SX569_.jpg', 'https://www.amazon.com/Amazon-Basics-Kettlebell-Enamel-25-Pound/dp/B0731DWW5K/', 4.8, '{"Solid Cast Iron: No welds or weak spots","Painted Surface: Protects against corrosion and increases durability","Wide Handle: Accommodates two-handed swings comfortably"}', 3);
INSERT INTO public.products (id, name, description, price_label, image, link, rating, features, category_id) VALUES (10, 'CAP Barbell 2-Inch Olympic Grip Plate (25 lbs)', 'Standard 25lb Olympic cast iron plate. Features oversized grip holes allowing you to use the plate itself for weighted exercises like russian twists.', 'Check Price', 'https://m.media-amazon.com/images/I/91wXt8kmq0L._AC_SX569_.jpg', 'https://www.amazon.com/Cap-2-Inch-Olympic-Weight-Plate/dp/B09NLFHMMH/', 4.7, '{"Fits 2-Inch Bars: Compatible with all standard Olympic sleeves","3-Hole Grip Design: Easy and safe handling when loading/unloading","Baked Enamel Finish: Prevents chipping and rusting"}', 3);
INSERT INTO public.products (id, name, description, price_label, image, link, rating, features, category_id) VALUES (11, 'Yes4All Slam Ball (20 lbs)', 'Heavy-duty weighted ball designed for slamming. The sand-filled interior prevents bouncing, forcing you to use muscle to pick it up every time.', 'Check Price', 'https://m.media-amazon.com/images/I/71d5QbnxIpL._AC_SY300_SX300_QL70_FMwebp_.jpg', 'https://www.amazon.com/Yes4All-Weighted-Strength-Training-Triangle/dp/B08J2D8J1M/', 4.6, '{"No-Bounce Design: Dead weight design for maximum effort","Textured Shell: Grooved PVC shell for better grip even when sweaty","Versatile: Use for wall balls, slams, or russian twists"}', 3);
INSERT INTO public.products (id, name, description, price_label, image, link, rating, features, category_id) VALUES (12, 'CAP Barbell Olympic Triceps Bar (Hex Bar)', 'Designed specifically to target the triceps and forearm muscles. The parallel grip design allows for unrestricted movement during skull crushers and hammer curls.', 'Check Price', 'https://m.media-amazon.com/images/I/61vtFou8MFL._AC_SX569_.jpg', 'https://www.amazon.com/CAP-Barbell-Olympic-Triceps-Chrome/dp/B0B6266S97/', 4.6, '{"Parallel Grip Design: Targets triceps and hammer curls more effectively than a straight bar","Rotating Sleeves: Reduces pressure on wrists and elbows during heavy lifts","Olympic Standard: Compatible with all 2-inch plates"}', 3);
INSERT INTO public.products (id, name, description, price_label, image, link, rating, features, category_id) VALUES (13, 'Amazon Basics Battle Exercise Rope - 1.5 Inch', 'Heavy-duty polyester blend rope for strength training and cardio. The 1.5-inch diameter is ideal for general fitness and building grip strength.', 'Check Price', 'https://m.media-amazon.com/images/I/81ihUfb86fL._AC_SX569_.jpg', 'https://www.amazon.com/AmazonBasics-1-5in-Battle-Exercise-Training/dp/B072Z2ZTM2/', 4.7, '{"3-Strand Twisted Design: Prevents fraying and breaking even with intense use","Heat-Shrink Handles: Provides a secure, non-slip grip during workouts","High Tensile Strength: Polyester blend is heavier and more durable than poly-dac"}', 4);
INSERT INTO public.products (id, name, description, price_label, image, link, rating, features, category_id) VALUES (14, 'Yes4All 3-in-1 Wooden Plyometric Box', 'Versatile wooden plyo box built for jump training, step-ups, and box squats. Offers three different heights in a single piece of equipment just by flipping it over.', 'Check Price', 'https://m.media-amazon.com/images/I/71OHdChOaxL._AC_SX569_.jpg', 'https://www.amazon.com/Yes4All-Exercise-Crossfit-Training-Plyometric/dp/B073Z8DFL2/', 4.6, '{"3-in-1 Design: Simply rotate the box to get 3 different height options","Puzzle Joint Construction: Interlocking joints provide maximum stability and strength","Sanded Edges: Smooth corners prevent scrapes and shin injuries on missed jumps"}', 4);
INSERT INTO public.products (id, name, description, price_label, image, link, rating, features, category_id) VALUES (15, 'Amazon Basics Medicine Ball (10 Pounds)', 'Sturdy rubber medicine ball with a textured surface for superior grip. Ideal for classic medicine ball workouts like weighted sit-ups, twists, and throws.', 'Check Price', 'https://m.media-amazon.com/images/I/81mdagDEUcL._AC_SX569_.jpg', 'https://www.amazon.com/Amazon-Basics-Medicine-Ball-10-Pounds/dp/B00R3N0BDS/', 4.7, '{"Textured Surface: Ensures a safe, non-slip grip even with sweaty hands","Durable Rubber Construction: Designed to bounce off hard surfaces","Versatile Tool: Develop core strength, balance, and coordination"}', 4);
INSERT INTO public.products (id, name, description, price_label, image, link, rating, features, category_id) VALUES (16, 'Fit Simplify Resistance Loop Bands (5 Set)', 'Set of 5 heavy-duty resistance loop bands. 100% natural latex. Perfect for glute bridges, squats, and mobility work.', 'Check Price', 'https://m.media-amazon.com/images/I/71MbhVCCo4L._AC_SX569_.jpg', 'https://www.amazon.com/Fit-Simplify-Resistance-Exercise-Instruction/dp/B01AVDVHTI/', 4.5, '{"5 Resistance Levels: From X-Light to X-Heavy","100% Natural Latex: Durable and eco-friendly","Portable: Includes a carry bag for working out anywhere"}', 4);
INSERT INTO public.products (id, name, description, price_label, image, link, rating, features, category_id) VALUES (17, 'BalanceFrom Puzzle Exercise Mat (EVA Foam)', 'High-density EVA foam tiles that interlock to cover any floor shape. Provides a cushion for floor exercises and protects hardwood from scratches.', 'Check Price', 'https://m.media-amazon.com/images/I/91ShwHOXbVL._AC_SX569_.jpg', 'https://www.amazon.com/BalanceFrom-Puzzle-Exercise-Interlocking-Tiles/dp/B013A4ASRW/', 4.6, '{"Interlocking Tiles: Customize the shape to fit your specific room","Double-Sided Non-Slip: Grips the floor and your shoes for safety","Moisture Resistant: Easy to clean with soap and water"}', 5);
INSERT INTO public.products (id, name, description, price_label, image, link, rating, features, category_id) VALUES (18, 'Hatha Yoga Extra Thick TPE Exercise Mat', 'Eco-friendly TPE material that is non-slip and odorless. Features body alignment lines to help you perfect your poses during yoga or pilates.', 'Check Price', 'https://m.media-amazon.com/images/I/817W9OVe-QL._AC_SX569_.jpg', 'https://www.amazon.com/Hatha-Yoga-Extra-Thick-TPE/dp/B08G1HTPYT/', 4.6, '{"Eco-Friendly TPE: Non-toxic, odorless, and recyclable material","Alignment System: Laser-engraved lines help you adjust your hands and feet","Double-Sided Non-Slip: Grips the floor firmly to prevent sliding"}', 5);
INSERT INTO public.products (id, name, description, price_label, image, link, rating, features, category_id) VALUES (19, 'Gaiam Essentials Thick Yoga Mat', 'A classic 2/5-inch thick yoga mat for fitness and floor exercises. Includes a carrying strap for easy transport.', 'Check Price', 'https://m.media-amazon.com/images/I/81k53EsViVL._AC_SX569_.jpg', 'https://www.amazon.com/Gaiam-Essentials-Fitness-Exercise-Easy-Cinch/dp/B07H9PZ42P/', 4.6, '{"Extra Thick: Cushions spine, hips, knees, and elbows on hard floors","Non-Slip Texture: Provides traction for holding poses","Non-Toxic: Free of standard harmful phthalates"}', 5);
INSERT INTO public.products (id, name, description, price_label, image, link, rating, features, category_id) VALUES (20, 'SuperMats Heavy Duty Equipment Mat', 'Rugged vinyl mat designed to go under treadmills, ellipticals, and bikes. Protects your carpets and floors from heavy equipment damage and dust.', 'Check Price', 'https://m.media-amazon.com/images/I/916HpBb27-L._AC_SX569_.jpg', 'https://www.amazon.com/SuperMats-High-Density-Commercial-Grade-Equipment/dp/B001THTUAO/', 4.7, '{"Floor Protection: Prevents scratches and indentations from heavy machines","Noise Reduction: Dampens vibration from running or cycling","Easy to Clean: Repels sweat and dust"}', 5);
INSERT INTO public.products (id, name, description, price_label, image, link, rating, features, category_id) VALUES (21, 'Amazfit Active 2 Smart Watch', 'AI-powered fitness smartwatch with a stunning 1.32" HD AMOLED display. Features 10-day battery life, Bluetooth calling, and precise GPS tracking.', 'Check Price', 'https://m.media-amazon.com/images/I/61MDBjgSsML._AC_SX569_.jpg', 'https://www.amazon.com/Amazfit-Battery-Display-Bluetooth-Water-Resistance/dp/B0DYJKTHYF/', 4.5, '{"10 Days Battery Life: Charge less and track more with extended power","AI Fitness Coach: Zepp Coach provides personalized training plans","Bluetooth Calling: Make and receive calls directly from your wrist"}', 6);
INSERT INTO public.products (id, name, description, price_label, image, link, rating, features, category_id) VALUES (22, 'Under Armour Men''s Tech 2.0 T-Shirt', 'UA Tech fabric is quick-drying, ultra-soft, and has a more natural feel. The material wicks sweat and dries incredibly fast to keep you cool during intense workouts.', 'Check Price', 'https://m.media-amazon.com/images/I/618B1YEYpAL._AC_SX522_.jpg', 'https://www.amazon.com/Under-Armour-T-Shirt-Graphite-X-Large/dp/B0785VV446/', 4.6, '{"Quick-Drying Fabric: Wicks sweat away from the body efficiently","Anti-Odor Technology: Prevents the growth of odor-causing microbes","Streamlined Fit: Shaped hem and fuller cut for complete comfort"}', 6);
INSERT INTO public.products (id, name, description, price_label, image, link, rating, features, category_id) VALUES (23, 'Adidas Men''s Tiro 21 Track Pants', 'The classic soccer track pant. Made with moisture-absorbing AEROREADY fabric to keep you dry. Features a tapered fit that doesn''t get in the way of your workout.', 'Check Price', 'https://m.media-amazon.com/images/I/71hkpTwlfNL._AC_SX425_.jpg', 'https://www.amazon.com/adidas-Track-Pants-Black-White/dp/B087D7KXHK/', 4.7, '{"Tapered Fit: Sleek look with room to move","Ankle Zips: Easy to take off over your shoes before or after a workout","Zip Pockets: Securely hold your phone and keys while running"}', 6);
INSERT INTO public.products (id, name, description, price_label, image, link, rating, features, category_id) VALUES (24, 'Fitbit Charge 6 Fitness Tracker', 'Advanced health tracker with built-in GPS, heart rate tracking, and stress management tools. Includes 6 months of Premium membership.', 'Check Price', 'https://m.media-amazon.com/images/I/61ZtqtvoD2L._AC_SX425_.jpg', 'https://www.amazon.com/Fitbit-Exercise-Equipment-6-Months-Membership/dp/B0CC62ZG1M/', 4.4, '{"Built-in GPS: See pace and distance directly on your wrist without your phone","Health Metrics: Tracks SpO2, heart rate variability, and sleep scores","7-Day Battery Life: Track for a full week without needing to recharge"}', 6);


--
-- Name: blogs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.blogs_id_seq', 1, false);


--
-- Name: categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.categories_id_seq', 6, true);


--
-- Name: products_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.products_id_seq', 24, true);


--
-- Name: blogs blogs_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.blogs
    ADD CONSTRAINT blogs_pkey PRIMARY KEY (id);


--
-- Name: blogs blogs_slug_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.blogs
    ADD CONSTRAINT blogs_slug_key UNIQUE (slug);


--
-- Name: categories categories_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);


--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);


--
-- Name: ix_blogs_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX ix_blogs_id ON public.blogs USING btree (id);


--
-- Name: ix_categories_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX ix_categories_id ON public.categories USING btree (id);


--
-- Name: ix_categories_name; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX ix_categories_name ON public.categories USING btree (name);


--
-- Name: ix_categories_slug; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX ix_categories_slug ON public.categories USING btree (slug);


--
-- Name: ix_products_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX ix_products_id ON public.products USING btree (id);


--
-- Name: ix_products_name; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX ix_products_name ON public.products USING btree (name);


--
-- Name: products products_category_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.categories(id);


--
-- PostgreSQL database dump complete
--

\unrestrict 4GcAycBqgVj2fLd1K7GLqPTIneIBILWJyCuGx2BOYt2BIf7LO4CsiBFFeYaVGTx

