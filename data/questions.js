/*
 * Aero Noir Academy — Part 107 question bank (DRAFT v0.1)
 *
 * Every question here is ORIGINAL wording written for study purposes. None are
 * copied from the FAA knowledge exam (the FAA does not publish the live bank).
 *
 * STATUS: every question has approved:false until the owner reviews it.
 * To approve: set the flag to true (or flip the whole bank with APPROVE_ALL below),
 * and set showUnapprovedQuestions:false in assets/config.js to hide anything unreviewed.
 *
 * Format: Q(topic, tier, question, correctAnswer, [wrong1, wrong2, wrong3], explanation, reference)
 *   tier "free"  -> shown in the free starter deck
 *   tier "prep"  -> reserved for the paid Part 107 Prep bank
 * The correct answer is always written first here; the app shuffles choices at runtime.
 *
 * VERIFY BEFORE PUBLISHING: regulations change (e.g., BVLOS "Part 108" rulemaking, Remote ID
 * enforcement, fee/testing changes). Check each item against the current eCFR and the current
 * FAA Remote Pilot sUAS Study Guide (FAA-G-8082-22) at review time.
 */
(function () {
  var APPROVE_ALL = false;
  var bank = [];
  function Q(topic, tier, q, right, wrong, why, ref) {
    bank.push({
      id: "q" + (bank.length + 1),
      topic: topic,
      tier: tier,
      q: q,
      choices: [right].concat(wrong),
      answer: 0,
      why: why,
      ref: ref,
      approved: APPROVE_ALL
    });
  }

  var REG = "Regulations", AIR = "Airspace & Charts", WX = "Weather",
      LOAD = "Loading & Performance", OPS = "Operations & Human Factors";

  /* ───────────── REGULATIONS ───────────── */
  Q(REG, "free", "Under Part 107 and without a waiver, what is the maximum altitude a small UA may be flown, unless within 400 feet of a structure?",
    "400 feet above ground level (AGL)",
    ["400 feet above mean sea level (MSL)", "500 feet AGL", "1,200 feet AGL"],
    "The standard ceiling is 400 ft AGL. Altitude is measured above the ground at the point of flight, not above sea level.",
    "14 CFR 107.51(b)");
  Q(REG, "free", "What is the maximum groundspeed allowed for a small UA under Part 107?",
    "100 mph (87 knots)",
    ["60 mph (52 knots)", "87 mph (75 knots)", "120 mph (104 knots)"],
    "Part 107 caps groundspeed at 100 mph, which is 87 knots. Groundspeed is measured over the ground, so a tailwind counts.",
    "14 CFR 107.51(a)");
  Q(REG, "free", "What is the minimum flight visibility, measured from the control station, required for a Part 107 operation?",
    "3 statute miles",
    ["1 statute mile", "5 statute miles", "3 nautical miles"],
    "Flight visibility must be at least 3 statute miles from the control station.",
    "14 CFR 107.51(c)");
  Q(REG, "free", "What cloud clearance must a small UA maintain?",
    "500 feet below and 2,000 feet horizontally from clouds",
    ["Clear of clouds only", "1,000 feet below and 1 mile horizontally", "500 feet above and 1,000 feet horizontally"],
    "Part 107 requires at least 500 ft below a cloud and 2,000 ft horizontally from it.",
    "14 CFR 107.51(d)");
  Q(REG, "free", "You will fly within a 400-foot radius of a building whose top is 300 feet AGL. What is the highest altitude you may fly (without a waiver)?",
    "700 feet AGL",
    ["400 feet AGL", "300 feet AGL", "1,000 feet AGL"],
    "Within a 400-ft radius of a structure you may fly up to 400 ft above the structure's uppermost limit: 300 + 400 = 700 ft AGL.",
    "14 CFR 107.51(b)(2)");
  Q(REG, "free", "Which statement best describes the visual line of sight (VLOS) requirement?",
    "The remote pilot or visual observer must see the UA with unaided vision, other than corrective lenses",
    ["The pilot may rely on FPV goggles if the video feed is clear", "The pilot may use binoculars to keep the UA in sight", "A camera view on the controller screen satisfies VLOS"],
    "VLOS means seeing the aircraft directly with the eyes (corrective lenses are fine). FPV goggles, binoculars, or screens do not satisfy VLOS.",
    "14 CFR 107.31");
  Q(REG, "free", "A UA must be registered with the FAA when its weight at takeoff, including payload, is more than…",
    "0.55 pounds (250 grams)",
    ["0.25 pounds", "1 pound", "5 pounds"],
    "Aircraft over 0.55 lb (250 g) must be registered. Under Part 107, every UA flown must be registered regardless of weight.",
    "14 CFR Part 48; FAA DroneZone");
  Q(REG, "free", "How old must a person be to obtain a remote pilot certificate with a small UAS rating?",
    "At least 16 years old",
    ["At least 14 years old", "At least 18 years old", "At least 21 years old"],
    "Applicants must be at least 16, read, speak, write, and understand English, and be physically and mentally able to operate safely.",
    "14 CFR 107.61");
  Q(REG, "free", "To keep their remote pilot certificate current, a certificated remote pilot must complete recurrent training…",
    "Every 24 calendar months",
    ["Every 12 months", "Every 36 months", "Only if they have an accident"],
    "Recurrent training (or exam) is required within the preceding 24 calendar months to act as remote PIC. The FAA offers the online recurrent course free on FAASafety.gov.",
    "14 CFR 107.65");
  Q(REG, "free", "Within what time frame must an accident be reported to the FAA when it results in serious injury or more than $500 in property damage (other than to the UA)?",
    "Within 10 calendar days",
    ["Immediately by phone only", "Within 24 hours", "Within 30 days"],
    "Report within 10 calendar days of the operation. Qualifying events: serious injury or loss of consciousness, or damage to property (other than the UA) exceeding $500.",
    "14 CFR 107.9");
  Q(REG, "free", "How many hours must pass after drinking alcohol before you may act as a remote pilot, visual observer, or direct participant?",
    "At least 8 hours (and BAC below 0.04%)",
    ["At least 2 hours", "At least 4 hours", "24 hours"],
    "The rule is 8 hours 'bottle to throttle,' and you also may not have an alcohol concentration of 0.04% or more.",
    "14 CFR 107.27");
  Q(REG, "free", "What is the maximum takeoff weight of a small UA, including everything on board, under Part 107?",
    "Less than 55 pounds",
    ["Less than 25 pounds", "Less than 100 pounds", "There is no weight limit"],
    "'Small UAS' means less than 55 lb at takeoff including payload and anything attached.",
    "14 CFR 107.3");
  Q(REG, "free", "Which Part 107 provision applies to operating a small UA from a moving vehicle?",
    "Only over a sparsely populated area, and not carrying another person's property for compensation",
    ["It is always prohibited", "It is allowed anywhere if the UA stays below 400 ft", "It is allowed anywhere if a visual observer is on board"],
    "Operating from a moving vehicle is permitted only over a sparsely populated area, and the UA may not carry another's property for compensation or hire.",
    "14 CFR 107.25");
  Q(REG, "prep", "May one remote pilot operate more than one small UA at the same time under Part 107 without a waiver?",
    "No, a waiver is required",
    ["Yes, up to 3 UA", "Yes, if all are under 0.55 lb", "Yes, if each has an attached visual observer"],
    "Part 107 does not permit a single remote pilot to operate multiple UA simultaneously unless a waiver (such as for swarm operations) is granted.",
    "14 CFR 107.35");
  Q(REG, "prep", "Which statement about 'yielding right of way' is correct for a small UA?",
    "The small UA must yield the right of way to all other aircraft",
    ["Other aircraft must yield to a small UA", "Right of way goes to whichever is lower in altitude", "Right of way applies only near airports"],
    "A small UA must always yield right of way to all aircraft and must not operate in a way that creates a collision hazard.",
    "14 CFR 107.37");
  Q(REG, "prep", "When may a remote pilot deviate from Part 107 rules without a waiver?",
    "In an in-flight emergency, to the extent needed to meet the emergency",
    ["Whenever weather conditions improve", "When the client requests it", "At any time if flying below 100 feet AGL"],
    "The remote PIC may deviate from any rule to the extent necessary to meet an emergency. The FAA may request a written report afterward.",
    "14 CFR 107.21");
  Q(REG, "prep", "Operating a small UA during civil twilight is permitted if…",
    "The UA has anti-collision lighting visible for at least 3 statute miles",
    ["The pilot has a night-vision waiver", "The UA flies below 100 feet AGL", "A second pilot is present"],
    "Twilight and night operations require anti-collision lighting visible 3 SM and with a flash rate adequate to avoid collisions, plus current knowledge/training for night.",
    "14 CFR 107.29");
  Q(REG, "prep", "How is civil twilight defined for Part 107 purposes in local time?",
    "30 minutes before official sunrise to official sunrise, and from official sunset to 30 minutes after",
    ["1 hour before sunrise and 1 hour after sunset", "From sunrise to sunset only", "The hour at midday"],
    "Civil twilight is the 30 minutes before sunrise and 30 minutes after sunset, local time (before official sunrise to official sunrise; official sunset to 30 minutes after).",
    "14 CFR 107.29");
  Q(REG, "prep", "To conduct an operation that Part 107 otherwise restricts (for example, flying beyond visual line of sight), you must…",
    "Apply for and receive a Certificate of Waiver from the FAA",
    ["File a flight plan with ATC", "Notify the local airport manager", "Register the operation on FAADroneZone only"],
    "Waivers are requested through FAA DroneZone and must show how safety will be maintained. Operations may not begin until the waiver is granted.",
    "14 CFR 107.205, 107.200");
  Q(REG, "prep", "When requested by FAA or law enforcement, what must a remote pilot make available?",
    "Remote pilot certificate and proof of UA registration",
    ["Flight logs of the last 90 days", "Insurance policy", "Pilot's medical certificate"],
    "The remote PIC must present their certificate and the aircraft registration, and let the FAA inspect the UAS on request.",
    "14 CFR 107.7");
  Q(REG, "prep", "Which is a requirement for a Category 1 operation over people?",
    "The UA weighs 0.55 lb or less including everything on board, and has no exposed rotating parts that would lacerate human skin",
    ["The UA must have a parachute", "The UA must weigh no more than 5 lb", "The pilot must hold a Part 61 certificate"],
    "Category 1 covers aircraft up to 0.55 lb with no exposed rotating parts that could lacerate skin on impact.",
    "14 CFR 107.110");
  Q(REG, "prep", "Under the Remote ID rule, an aircraft that must be registered is expected to…",
    "Broadcast Remote ID (standard or broadcast module) or fly only in an FAA-recognized identification area",
    ["Fly only after sunset", "Fly with an ADS-B transponder", "Carry a paper copy of its serial number"],
    "Remote ID functions like a digital license plate. Options are Standard Remote ID, a Remote ID broadcast module, or operating inside a FAA-recognized identification area (FRIA).",
    "14 CFR Part 89");
  Q(REG, "prep", "What is a key responsibility of a visual observer (VO)?",
    "To help the remote pilot see and avoid other aircraft, obstacles, and people, and to maintain VLOS",
    ["To handle ATC communications", "To hold the remote pilot certificate", "To fly the UA when the pilot is tired"],
    "A VO assists in keeping the UA in sight and scanning for hazards. They do not need a certificate but must be able to communicate effectively with the remote PIC.",
    "14 CFR 107.33");
  Q(REG, "prep", "Who is directly responsible for, and has final authority over, a Part 107 operation?",
    "The remote pilot in command",
    ["The UAS owner", "The visual observer", "The client"],
    "The remote PIC is directly responsible for compliance and has final authority over the operation.",
    "14 CFR 107.19");
  Q(REG, "prep", "How long is a Part 107 UA registration valid?",
    "3 years",
    ["1 year", "5 years", "It does not expire"],
    "UA registration under Part 107 is valid for 3 years and may be renewed.",
    "14 CFR Part 48");
  Q(REG, "prep", "Where must the FAA registration number be placed on the UA?",
    "On the exterior surface, or in a compartment opened without tools",
    ["Only on the remote controller", "Only on the battery", "It does not need to be displayed"],
    "The number must be readable on inspection, either externally or in a battery compartment that opens without tools.",
    "14 CFR Part 48");
  Q(REG, "prep", "Which of these may a remote pilot carry on a UA without violating Part 107?",
    "A camera and gimbal payload",
    ["Hazardous materials", "Explosives", "Flammable fuel in an open container"],
    "Part 107 prohibits carrying hazardous materials. Ordinary payloads such as cameras are fine as long as total weight stays under 55 lb.",
    "14 CFR 107.36");

  /* ───────────── AIRSPACE & CHARTS ───────────── */
  Q(AIR, "free", "On a sectional chart, how is Class B airspace depicted?",
    "Solid blue lines",
    ["Dashed blue lines", "Solid magenta lines", "Dashed magenta lines"],
    "Class B = solid blue; Class C = solid magenta; Class D = dashed blue; Class E that begins at the surface = dashed magenta.",
    "FAA Chart Users' Guide");
  Q(AIR, "free", "How is Class D airspace shown on a sectional chart?",
    "Dashed blue lines",
    ["Solid blue lines", "Solid magenta lines", "Dashed magenta lines"],
    "Class D is dashed blue. It surrounds airports with an operating control tower, usually from the surface to 2,500 ft AGL.",
    "FAA Chart Users' Guide");
  Q(AIR, "free", "How is Class C airspace shown on a sectional chart?",
    "Solid magenta lines",
    ["Dashed blue lines", "Solid blue lines", "Shaded blue vignette"],
    "Class C = solid magenta. It typically extends from the surface to 4,000 ft above the airport elevation.",
    "FAA Chart Users' Guide");
  Q(AIR, "free", "In which airspace may a small UA operate without any ATC authorization (assuming no other restrictions apply)?",
    "Class G",
    ["Class B", "Class C", "Class D"],
    "Class G is uncontrolled airspace. B, C, D and Class E surface areas require ATC authorization before flight.",
    "14 CFR 107.41");
  Q(AIR, "free", "What is LAANC?",
    "A system providing near-real-time airspace authorization in controlled airspace",
    ["A type of weather report", "A pilot certification program", "A drone registration database"],
    "Low Altitude Authorization and Notification Capability lets Part 107 pilots request authorization through approved apps, often in seconds, up to the altitudes shown in the UAS Facility Map.",
    "FAA LAANC program");
  Q(AIR, "free", "Where do you request an airspace authorization when LAANC isn't available for your location?",
    "FAA DroneZone",
    ["The local police department", "The nearest airport tower by phone", "No authorization is needed"],
    "Request further coordination through FAA DroneZone. These requests can take much longer, so apply early.",
    "FAA DroneZone");
  Q(AIR, "free", "On a sectional chart, an airport with a control tower is depicted in what color?",
    "Blue",
    ["Magenta", "Black", "Green"],
    "Towered airports appear in blue; non-towered airports appear in magenta.",
    "FAA Chart Users' Guide");
  Q(AIR, "free", "You see 'MEF 52' on a quadrant of a sectional chart (large 5, smaller 2). What does it mean?",
    "The highest obstacle or terrain elevation in the quadrant is 5,200 feet MSL (plus a safety margin)",
    ["Flight level 520", "A minimum flying altitude of 52 feet AGL", "The elevation of the nearest airport"],
    "The Maximum Elevation Figure is shown in thousands (large digit) and hundreds (small digit) of feet MSL: 5,200 ft.",
    "FAA Chart Users' Guide");
  Q(AIR, "free", "Which TFR is typically in effect around large stadiums during major sporting events?",
    "A restriction from 1 hour before to 1 hour after the event, within about 3 nautical miles, up to 3,000 feet AGL",
    ["No restriction applies", "Only on the day after the event", "Only for helicopters"],
    "A standing flight restriction applies at stadiums with 30,000+ seating for certain events. Always check NOTAMs for temporary changes.",
    "FAA stadium/sporting event restrictions; NOTAMs");
  Q(AIR, "prep", "What does a magenta shaded vignette (fading edge) on a sectional chart indicate?",
    "Class E airspace begins at 700 feet AGL",
    ["Class E airspace begins at the surface", "Class E airspace begins at 1,200 feet AGL", "A restricted area"],
    "Magenta vignette = Class E floor at 700 ft AGL. Blue vignette or no shading generally indicates 1,200 ft AGL.",
    "FAA Chart Users' Guide");
  Q(AIR, "prep", "What does a dashed magenta line around an airport indicate?",
    "Class E airspace that extends to the surface",
    ["Class D airspace", "A restricted area", "A military operations area"],
    "A dashed magenta boundary is Class E starting at the surface; ATC authorization is required to fly there.",
    "FAA Chart Users' Guide");
  Q(AIR, "prep", "What does the number in a LAANC UAS Facility Map grid cell represent?",
    "The maximum altitude in feet AGL that can generally be authorized in that cell",
    ["The grid's elevation MSL", "The number of drones allowed", "The radio frequency for ATC"],
    "Facility map grids show the ceiling (AGL) LAANC can approve automatically. A '0' means no automatic authorization.",
    "FAA UAS Facility Maps");
  Q(AIR, "prep", "What is a Prohibited Area (P-area)?",
    "Airspace in which flight is not permitted at all, for security or other reasons",
    ["Airspace that is only open at night", "Airspace for military training with some risk", "An area with high volumes of student pilots"],
    "Prohibited areas (like those over certain government sites) bar all flight unless otherwise authorized.",
    "AIM Chapter 3");
  Q(AIR, "prep", "What permission is needed to operate in a Restricted Area when it is active?",
    "Permission from the using or controlling agency",
    ["None; it is open to all aircraft", "Only a visual observer", "Only a weather briefing"],
    "Restricted areas contain unusual hazards (e.g., artillery, aerial gunnery, missiles). Entry requires permission of the controlling agency when active.",
    "AIM 3-4-3");
  Q(AIR, "prep", "What is a Military Operations Area (MOA)?",
    "Airspace set aside for military training; non-participating aircraft may fly there but should exercise extreme caution",
    ["A prohibited area", "A place where only military aircraft may fly", "Airspace for balloons"],
    "MOAs separate military training from IFR traffic. Pilots should check status with ATC/FSS and use caution.",
    "AIM 3-4-5");
  Q(AIR, "prep", "What is the lowest altitude at which Class A airspace begins?",
    "18,000 feet MSL",
    ["10,000 feet MSL", "14,500 feet AGL", "29,000 feet MSL"],
    "Class A runs from 18,000 ft MSL up to and including FL600. Small UAS under Part 107 never reach it.",
    "14 CFR 71.33");
  Q(AIR, "prep", "On a sectional chart, how are obstacle heights shown?",
    "Top elevation MSL is the large number; height AGL is the number in parentheses",
    ["AGL in large type and MSL in parentheses", "Both are in feet AGL", "Heights are omitted unless above 1,000 ft"],
    "Obstacle labels show MSL elevation of the top, and height above ground (AGL) in parentheses beneath it.",
    "FAA Chart Users' Guide");
  Q(AIR, "prep", "How often are sectional charts revised?",
    "Every 6 months",
    ["Every 28 days", "Every 5 years", "Every 56 days"],
    "VFR sectionals are updated every six months. The Chart Supplement is on a 56-day cycle. Always make sure your chart is current.",
    "FAA Aeronautical Chart Users' Guide");
  Q(AIR, "prep", "What does a NOTAM provide?",
    "Time-critical information such as TFRs, outages, and airspace changes",
    ["Historical weather", "Aircraft registration data", "Pilot certification status"],
    "Notices to Air Missions deliver urgent airspace and airport information, including TFRs relevant to Part 107 flights. Check before every flight.",
    "FAA NOTAM Search");
  Q(AIR, "prep", "Which is typically the vertical extent of Class D airspace?",
    "Surface up to about 2,500 feet AGL",
    ["Surface to 10,000 feet MSL", "700 feet AGL to 18,000 MSL", "Surface to 400 feet AGL only"],
    "Class D generally extends from the surface to 2,500 ft above the airport elevation around towered airports.",
    "AIM 3-2-5");

  /* ───────────── WEATHER ───────────── */
  Q(WX, "free", "In a METAR, what does 'BKN' indicate?",
    "Broken clouds covering 5/8 to 7/8 of the sky",
    ["Few clouds covering 1/8 to 2/8", "Scattered clouds covering 3/8 to 4/8", "Overcast covering 8/8"],
    "FEW = 1–2/8, SCT = 3–4/8, BKN = 5–7/8, OVC = 8/8. BKN and OVC layers define the ceiling.",
    "AC 00-45; FAA Weather Handbook");
  Q(WX, "free", "How is a 'ceiling' defined in aviation weather?",
    "The height of the lowest broken or overcast layer, or vertical visibility",
    ["The highest cloud layer", "The lowest scattered layer", "The altitude of the freezing level"],
    "A ceiling exists when the lowest layer is BKN or OVC (or obscured by vertical visibility). FEW and SCT do not create a ceiling.",
    "AIM; AC 00-45");
  Q(WX, "free", "In the METAR group '18008KT', what does it mean?",
    "Wind from 180° (true) at 8 knots",
    ["Wind toward 180° at 8 knots", "Wind from 18° at 8 knots", "Wind from 180° at 80 knots"],
    "The first three digits are the direction the wind comes FROM, in degrees true; the next digits are speed in knots.",
    "AC 00-45 / METAR");
  Q(WX, "free", "In a METAR, '10SM' refers to…",
    "Visibility of 10 statute miles",
    ["10 sea-mile cloud base", "A 10-knot gust", "10 hundred feet ceiling"],
    "SM stands for statute miles. 10SM is excellent visibility; Part 107 requires at least 3 SM.",
    "AC 00-45 / METAR");
  Q(WX, "free", "In a METAR the temperature/dewpoint group reads '09/07'. What does it suggest?",
    "Fog or low cloud may form because temperature and dewpoint are close",
    ["Very dry air", "Strong turbulence", "A temperature inversion has been eliminated"],
    "As temperature and dewpoint converge (within a few degrees), the air nears saturation and fog or low clouds become likely.",
    "FAA Remote Pilot Study Guide");
  Q(WX, "free", "Which factor increases density altitude?",
    "High temperature",
    ["Low temperature", "Low humidity", "High atmospheric pressure"],
    "Density altitude rises with high temperature, high elevation, and high humidity, and reduces propeller/rotor efficiency and battery performance.",
    "FAA Remote Pilot Study Guide");
  Q(WX, "free", "How does high density altitude affect small UA performance?",
    "Reduces lift and thrust, so performance and endurance suffer",
    ["Increases lift", "Improves battery endurance", "Has no effect on multirotors"],
    "Thinner air means rotors produce less lift, so motors work harder, draining the battery faster and reducing climb and control authority.",
    "FAA Remote Pilot Study Guide");
  Q(WX, "free", "Where can a remote pilot get current weather observations for an airport?",
    "ASOS/AWOS reports or the METAR for the nearest reporting station",
    ["A NOTAM", "Sectional charts", "The aircraft registration database"],
    "ASOS/AWOS provide continuous weather; METARs are the coded hourly observations. Use them with TAFs for forecasts.",
    "AIM Chapter 7");
  Q(WX, "prep", "A TAF is…",
    "A terminal aerodrome forecast covering a 5-statute-mile radius around an airport, typically for 24 or 30 hours",
    ["An observation of current weather", "A pilot's report of turbulence", "A map of winds aloft only"],
    "TAFs forecast conditions for a specific airport (5 SM around it) and are issued four times daily for 24 or 30 hours.",
    "AC 00-45");
  Q(WX, "prep", "What is a temperature inversion?",
    "A layer where temperature increases with altitude",
    ["Rapid temperature fall with altitude", "A cold front passage", "A change from Celsius to Fahrenheit"],
    "Inversions trap smoke, haze, and fog near the ground, reducing visibility, a concern for VLOS operations.",
    "FAA Remote Pilot Study Guide");
  Q(WX, "prep", "Which stage of a thunderstorm contains the strongest updrafts and downdrafts?",
    "Mature stage",
    ["Cumulus stage", "Dissipating stage", "Anvil stage"],
    "In the mature stage there are both updrafts and downdrafts, heavy rain, lightning, and hail. Do not fly near thunderstorms.",
    "FAA Remote Pilot Study Guide");
  Q(WX, "prep", "Which situation can create hazardous low-level turbulence for a small UA?",
    "Strong winds blowing over buildings or rugged terrain",
    ["Calm winds over open fields", "High clouds with light winds", "A light breeze from the south"],
    "Wind flowing past obstructions creates eddies, rotors, and shear that can be violent near the surface and hard for small UA to handle.",
    "FAA Remote Pilot Study Guide");
  Q(WX, "prep", "What generally causes weather changes in the atmosphere?",
    "Uneven heating of the Earth's surface by the Sun",
    ["The phase of the Moon", "Ocean tides", "Magnetic variation"],
    "Uneven heating produces pressure differences, which create wind and drive weather patterns.",
    "FAA Remote Pilot Study Guide");
  Q(WX, "prep", "What flight weather tendency is associated with a low-pressure system?",
    "Clouds, precipitation, and unsettled weather",
    ["Clear skies and stable air", "Always high wind but no clouds", "No change in weather"],
    "Low pressure air rises, cooling and condensing, which favors clouds and precipitation. High pressure typically brings clearer, more stable weather.",
    "FAA Remote Pilot Study Guide");
  Q(WX, "prep", "Why is a headwind important when planning battery use?",
    "Flying into the wind reduces groundspeed and can increase battery use when returning home",
    ["A headwind increases groundspeed", "A headwind has no effect on energy use", "Headwinds only matter above 400 ft"],
    "The aircraft's airspeed stays the same but groundspeed drops, so the trip takes longer and uses more energy. Plan the return leg for headwind.",
    "FAA Remote Pilot Study Guide");
  Q(WX, "prep", "'Z' or 'Zulu' time in weather products refers to…",
    "Coordinated Universal Time (UTC)",
    ["Local time", "Eastern time", "Pacific time"],
    "Aviation weather products use Zulu time (UTC) so everyone shares a single time reference. Convert to local time when planning.",
    "AIM; FAA Weather Handbook");

  /* ───────────── LOADING & PERFORMANCE ───────────── */
  Q(LOAD, "free", "What does adding weight to a UA generally do to its performance?",
    "Reduces endurance, climb rate, and maneuverability",
    ["Increases endurance", "Improves stability always", "Has no effect on battery time"],
    "More weight demands more thrust, which means higher motor load, shorter flight time, and less control margin.",
    "FAA Remote Pilot Study Guide");
  Q(LOAD, "free", "What does 'center of gravity (CG)' describe?",
    "The point where the aircraft would balance if suspended",
    ["The aircraft's highest point", "The location of the battery", "The location of the GPS antenna"],
    "CG is the balance point. Payload placement changes CG, so keeping it within limits is essential for stable flight.",
    "FAA Remote Pilot Study Guide");
  Q(LOAD, "free", "What is a likely result of mounting a heavy payload far from the UA's center of gravity?",
    "Poor stability and handling, and possible loss of control",
    ["Better stability", "Greater range", "No change"],
    "A shifted CG can make the aircraft unstable or push motors beyond their limits.",
    "FAA Remote Pilot Study Guide");
  Q(LOAD, "free", "What is the load factor for an aircraft in a coordinated, level 60° banked turn?",
    "2 G",
    ["1 G", "1.5 G", "4 G"],
    "Load factor = 1 / cos(bank). At 60° bank, cos = 0.5, so load factor = 2 G, meaning the airframe supports twice its weight.",
    "FAA Remote Pilot Study Guide");
  Q(LOAD, "free", "As the angle of bank in a level turn increases, what happens to the load factor?",
    "It increases",
    ["It decreases", "It stays at 1 G", "It becomes zero"],
    "A steeper bank needs more lift to hold altitude, so load factor and stall speed rise.",
    "FAA Remote Pilot Study Guide");
  Q(LOAD, "prep", "What happens to stall speed as load factor increases?",
    "Stall speed increases",
    ["Stall speed decreases", "Stall speed stays the same", "Stall speed becomes irrelevant"],
    "Higher load factor raises the speed at which the wing stalls. This applies to fixed-wing UA.",
    "FAA Remote Pilot Study Guide");
  Q(LOAD, "prep", "Which battery handling practice is recommended for lithium polymer batteries?",
    "Store at a partial 'storage' charge and away from flammable materials",
    ["Store fully charged for months", "Charge unattended on a bed", "Continue using a swollen battery"],
    "Storing LiPos near their storage voltage extends life and reduces fire risk. Never use damaged or puffy cells.",
    "FAA / manufacturer guidance");
  Q(LOAD, "prep", "An aft (rearward) center of gravity makes a fixed-wing UA…",
    "Less stable and harder to recover from a stall",
    ["More stable", "Easier to land", "More efficient in every way"],
    "An aft CG reduces pitch stability, which can lead to unrecoverable stalls.",
    "FAA Remote Pilot Study Guide");
  Q(LOAD, "prep", "What is 'weight and balance' planning for a UA primarily meant to ensure?",
    "The aircraft stays within weight and CG limits for safe flight",
    ["The aircraft is legal to sell", "The battery is fully charged", "The aircraft is registered"],
    "Staying within the manufacturer's weight and CG limits keeps handling predictable and prevents overstressing the airframe.",
    "FAA Remote Pilot Study Guide");
  Q(LOAD, "prep", "What effect does strong gusting wind have on a UA's endurance?",
    "It can significantly reduce endurance because the controller works harder to hold position",
    ["It extends endurance", "It has no effect", "It only matters at night"],
    "Gusts force constant corrections, consuming more power, so flight time drops and battery margin shrinks.",
    "FAA Remote Pilot Study Guide");

  /* ───────────── OPERATIONS & HUMAN FACTORS ───────────── */
  Q(OPS, "free", "Which mnemonic helps a pilot assess personal fitness to fly?",
    "IMSAFE (Illness, Medication, Stress, Alcohol, Fatigue, Emotion)",
    ["PAVE only", "NOTAM", "TFR"],
    "IMSAFE is a personal checklist: if any item is a concern, don't fly. (Some versions use 'Eating' for the last letter.)",
    "FAA Risk Management Handbook");
  Q(OPS, "free", "Which hazardous attitude is characterized by 'It won't happen to me'?",
    "Invulnerability",
    ["Impulsivity", "Resignation", "Anti-authority"],
    "The five hazardous attitudes are anti-authority, impulsivity, invulnerability, macho, and resignation. Each has an antidote.",
    "FAA Aeronautical Decision Making");
  Q(OPS, "free", "Which hazardous attitude is characterized by 'Do something quickly!'?",
    "Impulsivity",
    ["Macho", "Invulnerability", "Anti-authority"],
    "Impulsive pilots act without thinking. The antidote is 'Not so fast. Think first.'",
    "FAA Aeronautical Decision Making");
  Q(OPS, "free", "Which hazardous attitude is characterized by 'Rules don't apply to me'?",
    "Anti-authority",
    ["Resignation", "Macho", "Impulsivity"],
    "Anti-authority pilots resent rules. The antidote: 'Follow the rules. They are usually right.'",
    "FAA Aeronautical Decision Making");
  Q(OPS, "free", "Which is part of the Part 107 pre-flight assessment of the operating area?",
    "Local weather, airspace and flight restrictions, and location of persons and property on the ground",
    ["The pilot's social media schedule", "The UA's resale value", "The color of the UA"],
    "Before flying, the remote PIC must assess weather, local airspace/restrictions, people and property on the ground, and other ground hazards.",
    "14 CFR 107.49");
  Q(OPS, "free", "Which is the best way to scan for traffic when flying a small UA?",
    "Use short, regularly spaced eye movements to systematically cover each area",
    ["Stare at the UA continuously", "Scan only the center of the sky", "Rely on the UA's camera"],
    "Effective scanning covers the sky in short, regular steps (roughly 10° sections, each viewed for at least a second). Continuous staring misses traffic in other areas.",
    "FAA Remote Pilot Study Guide");
  Q(OPS, "free", "What action should a remote pilot take when the UA loses its control link (lost link)?",
    "Follow the pre-planned lost-link procedure, such as return-to-home, and keep other aircraft clear",
    ["Immediately turn off the controller", "Hope it returns by itself", "Fly the UA higher"],
    "Know your UA's failsafe behavior and set return-to-home altitude/location before flight. Alert others if there's a hazard.",
    "Manufacturer guidance; 14 CFR 107.19");
  Q(OPS, "prep", "What does CRM stand for in the context of Part 107 operations?",
    "Crew Resource Management",
    ["Collision Risk Metric", "Control Radio Module", "Certified Remote Mission"],
    "CRM covers communication, workload management, and teamwork between the remote PIC, VO, and other crew to prevent errors.",
    "FAA Remote Pilot Study Guide");
  Q(OPS, "prep", "Which hazardous attitude is characterized by 'I can do it'?",
    "Macho",
    ["Resignation", "Impulsivity", "Invulnerability"],
    "Macho pilots try to prove themselves and take unnecessary risks. The antidote is 'Taking chances is foolish.'",
    "FAA Aeronautical Decision Making");
  Q(OPS, "prep", "Which hazardous attitude is characterized by 'What's the use?'",
    "Resignation",
    ["Macho", "Anti-authority", "Invulnerability"],
    "Resignation leads pilots to give up and let others decide. The antidote is 'I'm not helpless. I can make a difference.'",
    "FAA Aeronautical Decision Making");
  Q(OPS, "prep", "At a non-towered airport with a CTAF, how are UA operators expected to behave?",
    "Avoid interfering with manned aircraft and yield right of way",
    ["Ignore manned traffic", "Fly directly in the traffic pattern", "Assume manned aircraft will avoid them"],
    "Part 107 pilots are not required to have radios, but must not interfere with manned aircraft and must always yield. Good practice includes monitoring CTAF.",
    "14 CFR 107.37; AIM");
  Q(OPS, "prep", "Why is it important to allow your eyes about 30 minutes to adapt before a night flight?",
    "Dark adaptation takes time; bright lights can quickly ruin night vision",
    ["Eyes adapt instantly", "Dark adaptation is not a factor", "Light has no effect on vision"],
    "Rod cells need roughly 30 minutes to fully adapt to darkness, and bright light resets the process.",
    "FAA Remote Pilot Study Guide");
  Q(OPS, "prep", "At night, the best way to see a dim object is to…",
    "Look slightly off-center of the object",
    ["Stare directly at it", "Use a bright flashlight", "Close one eye"],
    "The center of the retina has few rod cells, so dim objects are better seen using peripheral vision.",
    "FAA Remote Pilot Study Guide");
  Q(OPS, "prep", "Which is a recommended first step in a pre-flight inspection of a small UAS?",
    "Check the UAS per the manufacturer's checklist, including battery, propellers, control link, and software/firmware",
    ["Skip the inspection if it flew yesterday", "Inspect only the controller", "Only inspect the camera"],
    "Remote PICs must ensure the UAS is in a condition for safe operation, which means inspecting every flight-critical component.",
    "14 CFR 107.15");
  Q(OPS, "prep", "Which effect of fatigue is MOST relevant to safe UA operations?",
    "Impaired judgment, slower reaction time, and reduced situational awareness",
    ["Better focus", "Improved memory", "Faster decision-making"],
    "Fatigue degrades vigilance and decision-making, so avoid flying when tired. Use IMSAFE.",
    "FAA Remote Pilot Study Guide");
  Q(OPS, "prep", "What should you do if the UA's battery is swollen or damaged?",
    "Stop using it and dispose of it per local guidelines for lithium batteries",
    ["Keep using it until it fails", "Store it in the car", "Charge it faster"],
    "Damaged lithium batteries can short and ignite. Retire them safely and don't carry them on aircraft in checked bags.",
    "Manufacturer / FAA guidance");
  Q(OPS, "prep", "What is a 'fly-away'?",
    "The UA leaves the intended flight area because of lost link or navigation problems",
    ["A scheduled flight", "A pre-flight checklist item", "An approved waiver"],
    "A fly-away is a loss of control or navigation. Set correct return-to-home height and verify GPS lock before takeoff.",
    "FAA / manufacturer guidance");
  Q(OPS, "prep", "Under the general rule for operations over people, a small UA may NOT be flown over people who are not directly participating unless…",
    "The operation meets one of the Category 1–4 conditions, or the people are under a covered structure or in a stationary vehicle",
    ["The pilot keeps the UA below 100 feet AGL", "The people have been told in advance", "A visual observer is present"],
    "Part 107 Subpart D allows operations over people only when an eligible category (1–4) is met, or when people are inside a covered structure or stationary vehicle.",
    "14 CFR 107.39, 107.105");
  Q(OPS, "prep", "After a flight that involved an accident, which log or record is MOST useful to retain?",
    "Flight logs, battery data, and photos showing the scene and damage",
    ["Social media posts", "Marketing materials", "Printed sectional chart only"],
    "Good records support FAA reporting and insurance claims. Record date, time, location, weather, and a description of the event.",
    "Best practice; 14 CFR 107.9");
  Q(OPS, "prep", "Dehydration and heat stress during a long outdoor drone job can cause…",
    "Reduced alertness and impaired judgment",
    ["Improved reaction times", "Better vision", "Nothing noticeable"],
    "Hydrate and plan breaks. Heat and dehydration quickly degrade performance and decision-making.",
    "FAA Remote Pilot Study Guide");
  Q(OPS, "prep", "What does PAVE stand for in aeronautical decision making?",
    "Pilot, Aircraft, enVironment, External pressures",
    ["Planning, Airspace, Visibility, Equipment", "Preflight, Altitude, Velocity, Endurance", "Power, Altitude, Voltage, Environment"],
    "PAVE is a risk-management checklist that organizes hazards into four categories.",
    "FAA Risk Management Handbook");
  Q(OPS, "prep", "After a Part 107 flight, which action best supports continued safety?",
    "Record issues found, such as damage or battery concerns, before the next flight",
    ["Ignore minor issues", "Forget about the battery", "Delete the flight data"],
    "Maintenance and debrief notes help catch recurring problems early and support safe operation.",
    "14 CFR 107.15");

  window.ANA_QUESTION_BANK = bank;
})();
