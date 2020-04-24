const wordLists = new Map([
    ['VARIETY', ['SHOELACE', 'IRON', 'LIBRARY', 'UNCLE', 'SISTER', 'NOTEBOOK', 'OUTER SPACE', 'BRAKE', 'SHARK', 'MONEY', 'STRONG', 'TUNNEL', 'TELEPHONE', 'FIX', 'STUDY', 'LONG', 'PURSE', 'MOP', 'WAVE', 'BEACH', 'MARKERS', 'BANK', 'NICE', 'KNEE', 'COUGH', 'BIG', 'PENCIL', 'FIELD TRIP', 'BLACK', 'MAILMAN', 'WEDDING', 'MASCOT', 'RADIO', 'HELLO', 'TOOTHBRUSH', 'PIG', 'SHOUT', 'SLEEP', 'EMPTY', 'VIDEO CAMERA', 'DINNER', 'ANKLE', 'BROCCOLI', 'VACATION', 'PAJAMAS', 'JUICE', 'HUNGRY', 'CHEW', 'MOON', 'STORM', 'PAIL', 'DUMP TRUCK', 'GUITAR', 'ANIMAL', 'FAN', 'PLAY', 'KICK', 'ATHLETE', 'FOREHEAD', 'COMPUTER', 'SCOOTER', 'CLAW', 'ANTLERS', 'YOUNG', 'SHOPPING', 'MAGIC', 'HORN', 'SILLY', 'RHYME', 'FOUNTAIN', 'PRINCE', 'PEN', 'CRIB', 'COAT', 'VIOLIN', 'STICK', 'TAXI', 'RED', 'MELT', 'BAG', 'GLASSES', 'BOO', 'JEWELRY', "BIRD'S NEST", 'CAR', 'DIRTY', 'FALL', 'SWIMMING POOL', 'GIFT', 'TRACTOR', 'DRESS', 'STATE', 'COUNTRY', 'HAIL', 'MOUTH', 'BROTHER', 'MAKEUP', 'HOUSE', 'HOT', 'LULLABY', 'FIRE HYDRANT', 'DOG', 'CHICKEN', 'EAR', 'MAN', 'NIGHT', 'CAT', 'NEW', 'FISH', 'MOUNTAIN', 'AUNT', 'HAPPY', 'ROLLER COASTER', 'FOOTBALL', 'CAFETERIA', 'COWBOY', 'COUSIN', 'PAINT', 'BUY', 'NOSE', 'TYPE', 'BODY', 'ZOO', 'MONSTER', 'HIDE-AND-SEEK', 'WEAK', 'ARTIST', 'DIAMOND', 'DISHWASHER', 'HIGH', 'JELLY', 'STOMACH', 'PEAS', 'LADYBUG', 'YELLOW', 'SPOON', 'FOX', 'HAIR', 'DAD', 'BIRD', 'BIRTHDAY', 'WATER', 'DREAM', 'HOTEL', 'STAPLER', 'STUMP', 'CLOUD', 'NAP', 'PUPPY', 'ELEPHANT', 'ASLEEP', 'TV', 'DESK', 'WIND', 'SCHOOL', 'WALL', 'CALCULATOR', 'BALLET', 'FINGER', 'CHRISTMAS', 'JOURNAL', 'LAUGH', 'SEASHELL', 'CANDY', 'TUBA', 'TALK', 'HEAVY', 'TRASH CAN', 'SCIENTIST', 'SHIRT', 'COLD', 'NEIGHBOR', 'PLANK', 'PIANO', 'CLAP', 'KITE', 'BOAT', 'BOX', 'BARK', 'GRIN', 'QUARTER', 'PANTS', 'MALL', 'TOE', 'NURSE', 'ESCALATOR', 'TRAIN', 'SHOE', 'GO', 'SALT', 'TISSUE', 'RAINBOW', 'RING', 'ACTOR', 'GRANDMA', 'RACE', 'RANCH', 'STRAW', 'CAKE', 'ICE CREAM CONE', 'TIRED', 'MOO', 'WAGON', 'SAILBOAT', 'TRIANGLE', 'DUCK', 'LUNG', 'GOOD', 'HEAD', 'WOLF', 'TREE', 'MOVIE', 'SUN', 'CANDLE', 'COOK', 'OPPOSITE', 'SHOWER', 'UP', 'ROOM', 'GIRL', 'LIME', 'THUNDER', 'RUN', 'STREAM', 'LETTER', 'BED', 'DICTIONARY', 'ALARM CLOCK', 'KING', 'HUG', 'DOLL', 'RENT', 'CAST', 'COUCH', 'SLOW', 'BRIDGE', 'GRANDCHILD', 'ARM', 'JUMP', 'SNOW', 'TREE HOUSE', 'EAT', 'FIRE ENGINE', 'TOWEL', 'MIRROR', 'TELEVISION', 'TABLE', 'JACKET', 'SHORT', 'BASKETBALL', 'DOCTOR', 'NIGHTMARE', 'FIRE STATION', 'WITCH', 'SPY', 'TENT', 'BASEBALL', 'CLEAN', 'GREEN', 'DIRT', 'MAILBOX', 'BUG', 'COW', 'ROOF', 'FIRE', 'MOTORCYCLE', 'LIGHTNING', 'BOY', 'BEAK', 'CLOCK', 'PRINCESS', 'SHARE', 'FRYING PAN', 'CHEEK', 'SPIDER', 'HIT', 'CHEF', 'MUSIC', 'DANCE', 'INTERNET', 'LOCK', 'PEPPER', 'GROWN-UP', 'BITE', 'SAD', 'PAPER', 'FAIRY', 'WHEELCHAIR', 'CRAYON', 'LEG', 'HURT', 'PICTURE', 'MUD', 'WINTER', 'MUSEUM', 'SINGER', 'QUEEN', 'BOTTLE', 'FLOWER', 'BRIDE', 'FLASHLIGHT', 'LIST', 'POPSICLE', 'DAY', 'CLASSROOM', 'SHADOW', 'EXERCISE', 'ZERO', 'WHITE', 'ORANGE', 'FAUCET', 'UMBRELLA', 'WORM', 'FUR', 'PIZZA', 'WAITRESS', 'CHALK', 'SCARF', 'HAT', 'SANDCASTLE', 'AWAKE', 'PLAYGROUND', 'LION', 'TRIP', 'SLEEP IN', 'FULL', 'PILLOW', 'BACK', 'LOUD', 'FLAG', 'TOILET PAPER', 'CARROT', 'FAMILY', 'BALL', 'BUTTERFLY', 'NEPHEW', 'BANANA', 'SCISSORS', 'ROSE', 'ROAD', 'BABY', 'SUITCASE', 'OINK', 'BEDTIME', 'FENCE', 'EARTH', 'ALLIGATOR', 'SQUARE', 'NIECE', 'SNEEZE', 'WINDOW', 'WHISPER', 'LEMON', 'SPOOL', 'SWING', 'JAIL', 'DRAW', 'BIKE', 'ROBOT', 'APPLE', 'TWIG', 'LAUNDRY', 'GUM', 'PARK', 'OLD', 'HORSE', 'SHOVEL', 'BALLOON', 'GRASS', 'LIGHT BULB', 'PUDDING', 'NECK', 'PANTRY', 'VOLCANO', 'CLIMB', 'NEST', 'LEAF', 'GRAPE', 'LAWN MOWER', 'DOOR', 'TORNADO', 'LITTLE', 'BELT', 'TIGER', 'WRINKLE', 'DOLLAR', 'BREAKFAST', 'BACKPACK', 'BRAVE', 'COSTUME', 'ICE', 'MOUSE', 'ELBOW', 'YO-YO', 'POEM', 'BAT', 'HOT AIR BALLOON', 'PRESENT', 'FOG', 'LIGHT', 'FARM', 'BROOM', 'LINE', 'EYE', 'PUSH', 'ASTRONAUT', 'DENTIST', 'STAMP', 'STAR', 'PLEASE', 'HALF', 'BLIND', 'HELICOPTER', 'HOSPITAL', 'RECYCLE', 'SOAP', 'CITY', 'BALD', 'CHOCOLATE', 'SMELL', 'ABOVE', 'RAIN', 'FROG', 'FORK', 'SCHOOL BUS', 'WALK', 'STOP', 'STUDENT', 'BLUE', 'CHEERLEADER', 'CHAIR', 'SKIRT', 'TRUCK', 'CLOWN', 'OVEN MITT', 'CIRCLE', 'RIVER', 'CAVE', 'PARTY', 'BOWL', 'REFRIGERATOR', 'SMOKE', 'LIZARD', 'GYM', 'BIB', 'STAIRS', 'SMILE', 'SICK', 'SINK', 'EYEBROW', 'COUNT', 'ROCK', 'RIDE', 'AIRPLANE', 'FROWN', 'DEEP', 'TEACHER', 'HELP', 'BEDROOM', 'BLANKET', 'FIREMAN', 'WALLET', 'PILOT', 'BATH', 'PENNY', 'WRONG', 'RESTAURANT', 'MARKER', 'PEAR', 'PRAYER', 'STREET', 'VET', 'PICNIC', 'SANDWICH', 'STAND', 'BAD', 'TUSK', 'TAIL', 'HEART', 'NOON', 'CUP', 'SCARED', 'SNOWMAN', 'HILL', 'MICROWAVE', 'GOODBYE', 'HOPSCOTCH', 'BELOW', 'HOLIDAY', 'PLATE', 'FRONT', 'FRECKLE', 'QUIET', 'CHURCH', 'HOMEWORK', 'POLICEMAN', 'LOLLIPOP', 'HOOF', 'BLUE JEANS', 'MOM', 'MONDAY', 'LAST', 'GOLF', 'BROKEN', 'FAST', 'FIRST', 'LOW', 'GRANDPA', 'KEY', 'DRUMS', 'ELEVATOR', 'SING', 'DOWN', 'PURPLE', 'WATERMELON', 'FLY', 'CAMERA', 'NAIL POLISH', 'LUNCHBOX', 'SOCK', 'POCKET', 'BOOK', 'RIGHT', 'FEET', 'PAGE', 'GAME', 'LUNCH', 'DRUMS', 'CHIN', 'CLASSROOM', 'FLOCK', 'DIMPLE', 'SKULL', 'HIKE', 'BUTTON', 'HARP', 'QUILT', 'TIPTOE', 'GOLD', 'RECYCLE', 'COIN', 'DOGHOUSE', 'WEDDING RING', 'LIGHTHOUSE', 'INDEX', 'SPINE', 'BAKE', 'AIRPORT', 'MONEY', 'SADDLE', 'SOFTBALL', 'TRASH CAN', 'MALL', 'FIREFIGHTER', 'NET', 'AUNT', 'TIME MACHINE', 'THRONE', 'VASE', 'BICYCLE', 'BATHROOM SCALE', 'POSTER', 'GOAL', 'CLAW', 'CLOWN', 'SAP', 'POLICE OFFICER', 'COWBOY', 'PAWN', 'NIGHTMARE', 'LIP', 'QUILL', 'FISHING POLE', 'PAINT', 'PRIZE', 'SANDPAPER', 'TICKLE', 'STOPLIGHT', 'DIRT', 'WATER', 'JEEP', 'STOMP', 'SPRING', 'SEASHELL', 'MUTE', 'MONSTER', 'SUNBURN', 'SHIPWRECK', 'SNUGGLE', 'HOSE', 'SHELF', 'IPOD', 'SAW', 'POND', 'TORCH', 'BLUNT', 'DRIVEWAY', 'ASTRONAUT', 'LOG', 'SURFBOARD', 'SNEEZE', 'TOOTH', 'MAID', 'FRONT PORCH', 'BLUE JEANS', 'SILVERWARE', 'QUICKSAND', 'FUNNY', 'GLUE STICK', 'SPACESHIP', 'CRUISE', 'CRAMP', 'BRIDGE', 'DOCK', 'DARTS', 'LAUGH', 'FETCH', 'TAXI', 'PLUMBER', 'CEILING FAN', 'BITE', 'SNOWBALL', 'STORY', 'SINK', 'BLANKET', 'MATCH', 'TANK', 'HOTEL', 'TENNIS SHOES', 'KISS', 'IVY', 'SKIN', 'WRISTWATCH', 'MUSIC', 'BLUSH', 'SLAM DUNK', 'SKATEBOARD', 'WRENCH', 'CRACK', 'POCKET', 'ATTIC', 'DRAW', 'BEDSPREAD', 'CHEER', 'JOG', 'HUDDLE', 'BARN', 'CANDLE', 'LAKE', 'T-SHIRT', 'HOT TUB', 'WAG', 'POST OFFICE', 'EARACHE', 'TOOL', 'ROLLERBLADES', 'BUNK BED', 'SCAR', 'SNOWMAN', 'GERM', 'MOLD', 'PINCH', 'RAINBOW', 'ALARM CLOCK', 'PRESIDENT', 'BABY-SITTER', 'FACE', 'SPRINKLER', 'SIP', 'ORGAN', 'WRAP', 'WINDEX', 'KNIGHT', 'FOG', 'WINDMILL', 'FENCE', 'MOVIE', 'BRUISE', 'LUNCH TRAY', 'LAMP', 'HOOK', 'SPONGE', 'PACK', 'CRUMB', 'DATE', 'EASEL', 'SNACK', 'CELLO', 'SHED', 'FLAGPOLE', 'GASOLINE', 'DOLLAR', 'CARD', 'GROWN-UP', 'RAILROAD', 'RIND', 'HOPSCOTCH', 'SWAMP', 'LETTER OPENER', 'LIVING ROOM', 'HIDE-AND-SEEK', 'BETWEEN', 'HIP', 'CAPE', 'HEEL', 'BIB', 'FOREST', 'RATTLE', 'PAPERCLIP', 'WAIST', 'STIFF', 'SLIDE', 'OUTER SPACE', 'RAKE', 'SUN BLOCK', 'STANDING OVATION', 'BLINK', 'MAP', 'FLU', 'HURDLE', 'YAWN', 'RUG', 'CLOUD', 'IRONING BOARD', 'BANANA PEEL', 'WEED', 'FOREHEAD', 'CLICK', 'TELEPHONE BOOTH', 'SKIP', 'CHRISTMAS CAROLERS', 'BRICK', 'ACNE', 'PORCH SWING', 'SCALE', 'PAPERBACK', 'MAST', 'DANCE', 'GRANDFATHER', 'BUBBLE', 'DESK', 'CORNER', 'HOME MOVIES', 'BATTERIES', 'BANISTER', 'RIB', 'CHAIN', 'BLACKBOARD', 'WASHING MACHINE', 'DAWN', 'INK', 'PLANT', 'PHOTOGRAPH', 'PULL', 'EAT', 'LEATHER', 'GRILL', 'MOP', 'CHECK', 'RIM', 'BASKETBALL', 'BUD', 'SPY', 'MATCHSTICK', 'WALLET', 'SHOPPING CART', 'OIL', 'ROBE', 'BEDBUG', 'GUMBALL', 'CURB', 'PUZZLE PIECE', 'MOUNTAIN', 'NEWSPAPER', 'PLOW', 'SEESAW', 'GLIDE', 'FEAST', 'DENTIST', 'CAMPSITE', 'BASKET', 'PRINTER', 'BEG', 'RUNT', 'PUPPET', 'PLASTIC', 'CAMP', 'PADDLE', 'ERASER', 'TWIG', 'RACE', 'ELF', 'SIDEWALK', 'SOFA', 'HEADACHE', 'CANDLESTICK', 'LID', 'MAGIC', 'SHEET', 'WICK', 'PHOTOGRAPHER', 'DITCH', 'SHIP', 'SNOWBOARD', 'SHOULDER', 'STAGE', 'THINK', 'PIN', 'BALLPOINT PEN', 'FINGER', 'ROBOT', 'BEACH', 'GATE', 'COUNTRY', 'ROCKING CHAIR', 'FOIL', 'PIGPEN', 'PRIDE', 'SHOWER CURTAIN', 'INTERNET', 'PEA', 'CHESS', 'HAND', 'PING PONG', 'PIPE', 'TRUMPET', 'JAW', 'POGO STICK', 'ROCK', 'TAR', 'SMOG', 'TULIP', 'FLUTE', 'RUT', 'ROCKET', 'BAIT', 'THREAD', 'STEP-DAUGHTER', 'STRIPE', 'TAG', 'SAILBOAT', 'GOBLIN', 'LEAK', 'TEAM', 'COACH', 'OLD SPICE', 'GRANDMA', 'TICKET', 'ARM', 'RIDDLE', 'TIRE', 'BRASS', 'WAVES', 'SHACK', 'FIDDLE', 'BIRTHDAY', 'NAIL', 'CURTAINS', 'COT', 'EARTHQUAKE', 'STAPLER', 'WIND', 'SNOWFLAKE', 'HUG', 'SNAP', 'INSECT', 'YO-YO', 'SQUINT', 'STEM', 'STATIONERY', 'STOVE', 'CHURCH', 'ADDRESS', 'RIBBON', 'MAIL', 'PARK', 'SPIDER WEB', 'BASEBOARDS', 'CAGE', 'CARTOON', 'STAIRS', 'WOOD', 'CITY', 'DEW', 'ZIPPER', 'FRIDAY', 'BRANCH', 'TOP HAT', 'AIR', 'BLOSSOM', 'SWING', 'BOBSLED', 'BRAIN', 'BOIL', 'BONNET', 'BOWTIE', 'BEANSTALK', 'FAD', 'SIN', 'TELECONFERENCE', 'AUDACITY', 'CUTICLE', 'CRIME', 'STANDARD', 'AIRWAY', 'SPITE', 'FEAST', 'SAFE', 'PINCH', 'BILLBOARD', 'WOOL', 'RAFT', 'BLIMP', 'SHEAR', 'MAST', 'SASH', 'FALSETTO', 'BUDDY', 'PINE TREE', 'BUCKET', 'JOCKEY', 'TINE', 'STANDING OVATION', 'TILT', 'CONFUSED', 'DIVER', 'FIREMAN POLE', 'TUGBOAT', 'SHRINK RAY', 'BOB', 'OLYMPIAN', 'HALF', 'LEAK', 'CHIME', 'NUTRIENT', 'BANANA PEEL', 'HIGHJACK', 'CLOAK', 'SUM', 'TIDE', 'REIMBURSEMENT', 'PICTURE FRAME', 'PUNK', 'CAPITALISM', 'GARDEN HOSE', 'CABIN', 'ORGAN', 'CURE', 'COT', 'INCONCEIVABLE', 'CARDBOARD', 'RETINA', 'BATTLE', 'FIZZ', 'CHRISTMAS CAROLERS', 'TINTING', 'ELM', 'SLING', 'SHRUB', 'GUSTO', 'SUNTAN', 'MY', 'APPLAUSE', 'BEANSTALK', 'FIREFIGHTER', 'DUST BUNNY', 'SUNFLOWER', 'WISH', 'POMP', 'FLANNEL', 'SCREENPLAY', 'RACE', 'HEDGE', 'JIG', 'JURY', 'BLUNT', "JAMMIN'", 'CLUB', 'FIDDLE', 'REGGAE', 'RIDDLE', 'NUMBER', 'DEMO', 'PHONEMICS', 'EXAMPLE', 'SPOIL', 'ZEN', 'GINGER', 'ROMANCE', 'JADE', 'PLAID', 'YARDSTICK', 'FOREVER', 'CLIFF', 'FORT', 'SHERIFF', 'MORTICIAN', 'GRAY HAIRS', 'BEEHIVE', 'INDENT', 'NANNY', 'PATH', 'HUMIDIFIER', 'PUZZLE PIECE', 'JAZZ', 'WHIPLASH', 'AMATEUR', 'OUTER SPACE', 'SHOCK COLLAR', 'IMMUNE', 'BFF', 'BRAINSTORM', 'CATERING', 'FEUDALISM', 'HOUSEHOLD', 'HIGHWAY', 'STEP-DAUGHTER', 'GUILE', 'POTASSIUM', 'CRATE', 'MESS', 'RAG', 'FLUSH', 'GLUM', 'LEND', 'WHATEVER', 'HARDHEARTED', 'HELP', 'CAMPSITE', 'SALE', 'NEW', 'DARTS', 'SANDBOX', 'PECK', 'THROUGH', 'FEAR', 'HAIKU', 'CLOCKWORK', 'CROP', 'MAZE', 'LAMINATE', 'PASSWORD', 'IMAGE', 'BAY', 'LOLLIPOP', 'BOOTH', 'FANCY', 'DITCH', 'THINK', 'URGENT', "SOW'S EAR", 'DIMPLE', 'PLANK', 'MULTIPLICATION', 'CLAY', 'BLUR', 'GANG', 'CUPOLA', 'WOW', 'LIFE', 'FULL MOON', 'SOD', 'INN', 'FABRIC', 'HATCH', 'HEARTY', 'BRAND', 'IMPACT', 'OAK TREE', 'SQUINT', 'DAWN', 'CHAIN', 'JOG', 'DEGREE', 'VOICE', 'END', 'TIP', 'SIMMER', 'ZIGZAG', 'SUPERPOWER', 'PILE', 'FLU', 'WELDER', 'ETERNITY', 'WHOLE MILK', 'FLUCTUATE', "CROW'S NEST", 'SKIM MILK', 'RENDERING', 'SHIPWRECK', 'APPLICATION', "MURPHY'S LAW", 'HEM', 'ESCALATOR', 'SPOOL', 'GROUP', 'DENT', 'SIP', 'DEPLOYED', 'HUT', 'EBONY AND IVORY', 'BONNET', 'TIPTOP', 'OVERHANG', 'RHETORIC', 'SUNGLASSES', 'DUD', 'GOBLIN', 'COLLAGE', 'SCRAP', 'RUNT', 'PLUG', 'BRASS', 'FORTNIGHT', 'SKATING RINK', 'OGRE', 'SWIRL', 'CELL PHONE CHARGER', 'MODERN', 'CHICKEN COOP', 'INCIDENT', 'SCANNER', 'BALLPOINT PEN', 'JUGGLER', 'FRINGE', 'BLOSSOM', 'WREATH', 'BLEACH', 'DIVINE', 'SNAG', 'FREIGHT TRAIN', 'POPULATION', 'THROB', 'INTERN', 'VISCOSITY', 'SCAR TISSUE', 'LADDER RUNG', 'MUSICIAN', 'METICULOUS', 'RUT', 'DOOM', 'MIDSUMMER', 'TRAFFIC JAM', 'TUNIC', 'SCRAMBLE', 'DRESS SHIRT', 'SCOUNDREL', 'FIRST MATE', 'DOT', 'GLIDE', 'PUBLISHER', 'KITCHEN KNIFE SET', 'COG', 'CUFF', 'MASCOT', 'SCUFF MARK', 'JOURNEY', 'BLUEPRINT', 'GEM', 'SENTENCE', 'HANDWRITING', 'LECTURE', 'PURGE', 'HOUSEBOAT', 'COAST', 'COAL', 'UNDERESTIMATE', 'SEQUINS', 'PAINT', 'RIBBON', 'FRONT PORCH', 'NECKTIE', 'SWING', 'COIN', 'CLEANING SPRAY', 'BOWTIE', 'ICE', 'WRISTWATCH', 'TELEPHONE', 'WINDEX', 'HAND SOAP', 'QUARTER', 'SWEATER VEST', 'CARDBOARD', 'TOOTHBRUSH', 'YARDSTICK', 'LAPTOP', 'HOMEWORK', 'HANDLE', 'CALENDAR', 'SHAMPOO', 'LADDER', 'T-SHIRT', 'BICYCLE', 'TOOTHPASTE', 'BOX', 'WASHING MACHINE', 'MAIL', 'REFRIGERATOR', 'STAIRS', 'PORCH SWING', 'WATERING CAN', 'CRIB', 'CHIMNEY', 'SUN BLOCK', 'PENCIL', 'CD', 'WINDOW', 'CELL PHONE', 'PRINTER PAPER', 'BOOKS', 'BLANKET', 'PENNY', 'QUILT', 'SILVERWARE', 'COMPUTER', 'TRASH CAN', 'MAGAZINE', 'RED WAGON', 'LOVESEAT', 'MEAL', 'BENCH', 'DOLLAR', 'BEDROOM', 'IPOD', 'CANDLE', 'SHOWER', 'HEADBAND', 'BOOTS', 'BUTTON', 'BATHROOM SCALE', 'SHOES', 'FLOOR', 'LAWN MOWER', 'WHEEL', 'YO-YO', 'SPICE RACK', 'UMBRELLA', 'LAMP', 'ERASER', 'KITCHEN', 'KEY', 'TOWEL', 'YARN', 'MITTEN', 'RATTLE', 'LIVING ROOM', 'TELEVISION', 'GARDEN HOSE', 'BALLOON', 'WEED', 'BIB', 'STAIN', 'SANDPAPER', 'DOOR KNOB', 'HAIRSPRAY', 'BOTTLE', 'FAKE FLOWERS', 'ROBE', 'MAILBOX', 'WICK', 'VEST', 'BLUE JEANS', 'BALLPOINT PEN', 'SANDBOX', 'BUNK BED', 'THREAD', 'BASKET', 'JUNK DRAWER', 'POSTER', 'DRILL', 'HAND LOTION', 'GLOBE', 'DOG LEASH', 'LOOSE CHANGE', 'BAG', 'NAPKIN', 'HAIRBRUSH', 'DUSTPAN', 'CURTAINS', 'DVDS', 'MARKERS', 'BROOM', 'BATTERIES', 'DINNER', 'ZIPPER', 'BLEACH', 'TENNIS SHOES', 'PHOTOGRAPH', 'PILLOWCASE', 'SCISSORS', 'STOVE', 'SUNGLASSES', 'DOLL', 'SPONGE', 'BUBBLE', 'SOCKS', 'GLASSES', 'BIKE', 'IRON', 'SHOE', 'PICTURE FRAME', 'BEDBUG', 'SWEATER', 'PAPERBACK', 'RUBBER BAND', 'BAND-AID', 'HULA HOOP', 'POCKET', 'SNACK', 'KITCHEN KNIFE SET', 'PAPERCLIP', 'HOT WATER', 'INK', 'DOORWAY', 'BEDTIME', 'PAJAMAS', 'SASH', 'STAPLER', 'BUCKET', 'PICTURE', 'JEWELRY', 'TISSUE', 'DOOR', 'BATH', 'TABLE', 'STAMP', 'LAUNDRY BASKET', 'SOFA', 'SNOWMAN', 'SPEAKERS', 'HAIR DRYER', 'GLUE STICK', 'EXTENSION CORD', 'VASE', 'DRIVEWAY', 'COAT', 'SKATEBOARD', 'CELL PHONE CHARGER', 'PANTS', 'BOOK', 'SPOON', 'RING', 'CASH', 'STAMPS', 'PRINTER', 'MESS', 'LETTER OPENER', 'GLASS', 'CAMERA', 'SKIRT', 'PAPER', 'INTERNET', 'WREATH', 'LIPSTICK', 'MONEY', 'PUZZLE PIECE', 'MOLD', 'LACE', 'DUCT TAPE', 'MAGNETS', 'CEILING FAN', 'CLOCK', 'POGO STICK', 'DOGHOUSE', 'BLOCK', 'LIGHT SWITCH', 'SHIRT', 'FLOWERS', 'LUNCHBOX', 'ROOF', 'ROCKING CHAIR', 'DOORKNOB', 'TOILET PAPER', 'CRUMB', 'CHAIR', 'BED', 'GARAGE', 'RAKE', 'SHOWER CURTAIN', 'MINI BLINDS', 'PILLOW', 'PIANO', 'SHOVEL', 'BASEBOARDS', 'BATHROOM', 'NEWSPAPER', 'WALLET', 'LAUNDRY DETERGENT', 'DRESS SHIRT', 'JAR', 'SCARF', 'STATIONERY', 'BATHTUB', 'SWIMMING POOL', 'PURSE', 'CEILING', 'GARBAGE', 'FLASHLIGHT', 'IPAD', 'IRONING BOARD', 'SPRINKLER', 'KITE', 'PANTRY', 'BANISTER', 'CHEST', 'LEAK', 'DRESS', 'GRILL', 'SCUFF MARK', 'CRAYON', 'TV', 'SUITCASE', 'ELECTRICAL OUTLET', 'DRYER SHEETS', 'DUST BUNNY', 'MIRROR', 'BANANA PEEL', 'BABY-SITTER', 'DOORBELL', 'BOOT', 'DESK', 'HOME MOVIES', 'DRUMS', 'DOORMAT', 'BROTHER', 'CRAYONS', 'TAPE', 'GARDEN', 'SUNDAY SHOES', 'VIDEO CAMERA', 'PLASTIC']],
    ['ANIMALS', ['CAT', 'MOLE', 'KOMODO DRAGON', 'EWE', 'SNAPPING TURTLE', 'CATFISH', 'POLAR BEAR', 'WILDEBEEST', 'STALLION', 'CANADIAN GOOSE', 'CRANE', 'PARTRIDGE', 'TOUCAN', 'WORM', 'WHALE', 'TROUT', 'BABOON', 'STORK', 'HYENA', 'PANDA', 'CANARY', 'APE', 'SKUNK', 'BEAR', 'DOLPHIN', 'DRAGON', 'PONY', 'KITTEN', 'CLAM', 'RABBIT', 'BASS', 'TIGER', 'OX', 'ELEPHANT', 'SHEEP', 'HUMPBACK WHALE', 'DRAGONFLY', 'FLOCK', 'BUTTERFLY', 'DODO BIRD', 'BLOWFISH', 'TURKEY', 'LADYBUG', 'GILA MONSTER', 'SALAMANDER', 'LEMUR', 'GRIZZLY', 'LARK', 'EAGLE', 'GOAT', 'GOOSE', 'ROLLY POLLY', 'CRAB', 'REINDEER', 'PARROT', 'CROW', 'BULLDOG', 'DEER', 'GROUNDHOG', 'PRAIRIE DOG', 'KOALA', 'MEERKAT', 'DOG', 'MANATEE', 'ARMADILLO', 'EARTHWORM', 'TURTLE', 'MONKEY', 'CHAMELEON', 'OTTER', 'OSTRICH', 'SHRIMP', 'FINCH', 'HORSE', 'ALLIGATOR', 'ALBATROSS', 'FLY', 'ANT', 'BISON', 'BUNNY', 'COUGAR', 'CAMEL', 'RAT', 'FLOUNDER', 'PIG', 'COYOTE', 'PENGUIN', 'ELK', 'MALLARD', 'CHICK', 'BOA CONSTRICTOR', 'HAWK', 'SHEEP DOG', 'DINOSAUR', 'ZEBRA', 'LION', 'LEOPARD', 'SEA TURTLE', 'BUMBLEBEE', 'EMU', 'BEAVER', 'HIVE', 'ANTELOPE', 'SEA LION', 'BUSH BABY', 'BLACK BEAR', 'GOPHER', 'AARDVARK', 'GERBIL', 'SQUIRREL', 'CHEETAH', 'RAVEN', 'CAPYBARA', 'MOTH', 'HUMAN', 'TORTOISE', 'ROOSTER', 'DOVE', 'DUCK', 'HOUSECAT', 'MOOSE', 'MULE', 'SHREW', 'PELICAN', 'YAK', 'HAMSTER', 'WOMBAT', 'CRICKET', 'CUB', 'MACAW', 'HERD', 'INCHWORM', 'PUPPY', 'ROBIN', 'HEDGEHOG', 'CHICKEN', 'MINK', 'CALF', 'CROCODILE', 'FOX', 'MOUSE', 'GORILLA', 'BADGER', 'SCHOOL OF FISH', 'MOSQUITO', 'GRASSHOPPER', 'SWORDFISH', 'POODLE', 'CATERPILLAR', 'TASMANIAN DEVIL', 'PORCUPINE', 'OWL', 'COCKROACH', 'SNAIL', 'BUFFALO', 'KANGAROO', 'GNU', 'WASP', 'BARRACUDA', 'GIRAFFE', 'HEN', 'BLUE WHALE', 'PIRANHA', 'SEAHORSE', 'GALAPAGOS TORTOISE', 'BLUEBIRD', 'CLOWNFISH', 'ALPACA', 'JAGUAR', 'CHIPMUNK', 'TADPOLE', 'BALD EAGLE', 'GAZELLE', 'ANTEATER', 'CHIMPANZEE', 'WALRUS', 'BAT', 'HORNET', 'SABER-TOOTH TIGER', 'PARAKEET', 'SQUID', 'WARTHOG', 'CHINCHILLA', 'BIRD', 'PIGEON', 'JELLYFISH', 'GUINEA PIG', 'SPIDER', 'NARWHAL', 'DOE', 'DONKEY', 'WEASEL', 'SWAN', 'RAM', 'JOEY', 'SNAKE', 'SEAGULL', 'TOAD', 'LOBSTER', 'STARFISH', 'LLAMA', 'HARE', 'FALCON', 'KILLER WHALE', 'SHARK', 'EEL', 'BEE', 'PANTHER', 'HIPPOPOTAMUS', 'BASSET HOUND', 'FLAMINGO', 'SALMON', 'RACCOON', 'T-REX', 'RHINOCEROS', 'JACKALOPE', 'FROG', 'COW', 'TUNA', 'STINGRAY', 'OYSTER', 'UNICORN', 'WOLF', 'HUMMINGBIRD', 'COBRA', 'WATER BUFFALO', 'WOOLY MAMMOTH', 'DUCKLING', 'FERRET', 'SEAL', 'BOAR', 'LAMB', 'HAMMERHEAD SHARK', 'PYTHON', 'IGUANA', 'DADDY LONGLEGS', 'THREE-TOED SLOTH', 'PLATYPUS']],
    ['FOOD', ['PEA', 'YAM', 'MOZZARELLA CHEESE', 'BLACK BEANS', 'FRIED CHICKEN', 'CHOCOLATE CHIP COOKIE', 'VANILLA EXTRACT', 'CROUTONS', 'SPONGE CAKE', 'CHILI PEPPER', 'CHERRY PIE', 'CHOCOLATE SHAKE', 'RASPBERRY', 'HOT DOGS', 'CLAMS', 'SARDINES', 'GINGERBREAD', 'OLIVE', 'SALTINE CRACKERS', 'POPSICLE', 'LASAGNA', 'GRANOLA', 'SHISH KABOB', 'BREAKFAST', 'KALE', 'TOASTER', 'ICE CREAM CONE', 'JELLY', 'SMOOTHIE', 'OKRA', 'PISTACHIO', 'BRUSSELS SPROUTS', 'BAKED ALASKA', 'LIVER', 'BANANA', 'MARSHMALLOW', 'CELERY', 'RICE', 'TANGERINE', 'BUNDT PAN', 'OVEN MITT', 'POULTRY', 'CARROT', 'TOFU', 'JAM', 'A LA CARTE', 'SWISS CHEESE', 'APRICOT', 'CHICKEN POT PIE', 'MILKSHAKE', 'BLACKBERRY', 'SNICKERDOODLE', 'BROWNIE', 'TOMATO', 'BASIL', 'PITA', 'CANDY', 'CHICKPEA', 'EGG SALAD', 'REFRIED BEANS', 'HAM', 'CUSTARD', 'CORNMEAL', 'LIMA BEAN', 'SALAD DRESSING', 'SOURDOUGH BREAD', 'SIFTER', 'EGG', 'CARAMEL', 'SALT', 'SUGAR COOKIE', 'CURRY', 'GRAPEFRUIT', 'SPAM', 'BEET', 'PEAR', 'BROIL', 'VEGGIE BURGER', 'SALAD', 'BAGUETTE', 'CATFISH', 'TEMPURA', 'LOBSTER', 'PUMPKIN SEEDS', 'CHOCOLATE MILK', 'SCRAMBLED EGGS', 'APPETIZER', 'CINNAMON', 'LENTILS', 'BOSTON CREAM PIE', 'LAMB', 'DRIVE-THROUGH', 'PASTA', 'BEEF', 'PRETZEL', 'GRILL', 'RATATOUILLE', 'WEDDING CAKE', 'GARLIC', 'DOUGHNUTS', 'WHOLE MILK', 'LEMON ZESTER', 'ALMOND', 'SALMON', 'WHEAT BREAD', 'ROLLS', 'SCONE', 'CABBAGE', 'BANANA SPLIT', 'DEEP-FRY', 'CUTTING BOARD', 'SIMMER', 'CANADIAN BACON', 'CAVIAR', 'POMEGRANATE', 'SEA SALT', 'NUTMEG', 'GOURD', 'SWEET POTATO', 'PLUM', 'SUN-DRIED TOMATOES', 'BURGER KING', 'MUFFIN TIN', 'MEATBALLS', 'PEACH', 'GRANOLA BAR', 'WOK', 'WATERMELON', 'BAKE', 'BIRTHDAY CAKE', 'BANANA BREAD', 'BAKED BEANS', 'ZEST', 'LEMON', 'OATMEAL RAISIN COOKIES', 'PORK', 'BUNDT CAKE', 'LETTUCE', 'PEANUT BUTTER COOKIES', 'KUMQUAT', 'KFC', 'LA CARTE', 'SQUASH', 'FLOUR', 'GRITS', 'SOYBEAN', 'DREDGE', 'VENISON', 'TOMATO SOUP', 'CASHEW', 'CHEESEBURGER', 'POTATO CHIP', 'CAKE', 'HAMBURGER', 'GRAPE', 'MACAROON', 'OCTOPUS', 'BAKING SODA', 'WAFFLE CONE', 'FORTUNE COOKIE', 'MAC AND CHEESE', 'OATMEAL', 'CHERRY', 'PEPPERONI PIZZA', 'TOASTER OVEN', 'BANANA PUDDING', 'CHOW MIEN', 'GREEN ONION', 'ALMOND EXTRACT', 'COTTAGE CHEESE', 'BROCCOLI', 'GUACAMOLE', 'EGGPLANT', 'JELL-O', 'SPAGHETTI', 'GINGERBREAD MAN', 'CHEDDAR CHEESE', 'ORANGE CHICKEN', 'BAKED POTATOES', 'SPATULA', 'EGG TIMER', 'LEEK', 'PANCAKE', 'MUSHROOM', 'BABY CARROTS', 'SALT SHAKER', 'POTATO SALAD', 'APPLE', 'ANGEL FOOD CAKE', 'FORK', 'MELT', 'PEANUT', 'COCONUT', 'SLOPPY JOE', 'MILK', 'BROTH', 'WALNUTS', 'BLENDER', 'KOOL-AID', 'CEREAL', 'BAGEL', 'PIZZA', 'WHISK', 'TURNIP', 'GINGER', 'GARBANZO BEAN', 'FRUITCAKE', 'TACO BELL', 'NAPKIN', 'RAISIN', 'MCDONALDS', 'BREAD BOWL', 'TORTILLA', 'DATE', 'TACO', 'CHICKEN SOUP', 'CHICKEN SALAD SANDWICH', 'ALFREDO SAUCE', 'BOILED EGG', 'RYE BREAD', 'CORN ON THE COB', 'POPCORN SHRIMP', 'HONEYDEW', 'ALL-YOU-CAN-EAT BUFFET', 'MEAT', 'ASPARAGUS', 'TURKEY', 'CHOCOLATE CAKE', 'BLACK-EYED PEA', 'DEVILED EGGS', 'FREEZE', 'MUSTARD', 'FROZEN YOGURT', 'SANDWICH', 'BISCUITS AND GRAVY', 'RADISH', 'GREEN BEAN', 'PANCAKES', 'CRACKERS', 'FRUIT SMOOTHIE', "S'MORES", 'POPCORN', 'MUFFIN', 'BLT', 'AVOCADO', 'BALSAMIC VINEGAR', 'CHICKEN FRIED STEAK', 'YOGURT', 'BLANCH', 'TURKEY BACON', 'GREEN BEAN CASSEROLE', 'SODA', 'ZUCCHINI', 'JALAPEÑO', 'MEATLOAF', 'TATER TOTS', 'PEANUT BUTTER', 'POTATO', 'CORN FLAKES', 'KEY LIME PIE', 'TORTILLA CHIPS', 'COOKIE', 'LIME', 'BLUEBERRY', 'PINTO BEANS', 'PARSNIP', 'POTATOES AU GRATIN', 'BRAN MUFFINS', 'BISCUIT', 'FRIED RICE', 'BAVARIAN CREAM', 'TWINKIES', 'CHEESECAKE', 'CINNAMON ROLLS', 'ONION', 'CHICKEN', 'MACARONI AND CHEESE', 'PAPAYA', 'CREPE', 'MASHED POTATOES', 'ICE CREAM SUNDAE', 'HORSERADISH', 'CHEESE', 'FRENCH FRIES', 'CAULIFLOWER', 'ORANGE', 'SESAME SEEDS', 'KIWI', 'TUNA', 'KIDNEY BEANS', 'CORNDOG', 'WOODEN SPOON', 'WATER CHESTNUT', 'CUCUMBER', 'SALSA', 'TUNA SALAD', 'ARTICHOKE', 'PARMESAN CHEESE', 'PUMPKIN PIE', 'PECAN', 'ONION RINGS', 'BOK CHOY', 'FLATBREAD', 'CRAB', 'LOW-FAT', 'SOUP DE JOUR', 'GRILLED CHEESE', 'SUSHI', 'ICE CREAM', 'POACH', 'PINEAPPLE', 'JELLYBEANS', 'VANILLA WAFER', 'CRANBERRY', 'PINEAPPLE UPSIDE DOWN CAKE', 'FRYING PAN', 'FIG', 'COLANDER', 'SHRIMP', 'STRAWBERRY', 'MARINADE', 'FLAMBÉ', 'SKIM MILK', 'DAIRY', 'PEANUT BUTTER AND JELLY SANDWICH', 'SPINACH', 'ROLLING PIN', 'POP TART', 'FRUIT SALAD', 'CUPCAKES', 'BUFFALO WINGS', 'CORNBREAD', 'CLEMENTINE', 'PUMPKIN', 'CANTALOUPE', 'TOAST', 'PRODUCE', 'APPLE PIE', 'EGG NOG', 'CARROT CAKE', 'SUNFLOWER SEEDS', 'PUDDING', 'PAELLA', 'RANCH DRESSING', 'POTATO CHIPS', 'BREAD', 'SOUFFLÉ', 'CORN', 'OMELET', 'WAFFLES', 'DUTCH OVEN', 'BELL PEPPER', 'BEEF JERKY', 'WHITE BREAD', 'BARLEY', 'EGG SALAD SANDWICH', 'SOFT PRETZEL', 'NOODLES', 'SWEET POTATOES']],
    ['PEOPLE', ['MARIE CURIE', 'SAMUEL L. JACKSON', 'BILL CLINTON', 'SACAGAWEA', 'NEIL DIAMOND', 'JAMES MADISON', 'TIGER WOODS', 'TOM HANKS', 'JACQUELINE KENNEDY ONASIS', 'SHIA LABEOUF', 'CLAUDE MONET', 'HELEN KELLER', 'NICOLE KIDMAN', 'ALEXANDER THE GREAT', 'SALVADOR DALI', 'LEONARDO DA VINCI', 'ALBERT EINSTEIN', 'THE BEATLES', 'AMANDA BYNES', 'JOHN F. KENNEDY', 'ARCHIMEDES', 'THEODORE ROOSEVELT', 'DORIS DAY', 'HARRISON FORD', 'JACK BLACK', 'SIGMUND FREUD', 'DAKOTA FANNING', 'ELEANOR ROOSEVELT', 'NATHANIEL HAWTHORNE', 'VINCENT VAN GOGH', 'ROBIN WILLIAMS', 'WEIRD AL YANKOVICK', 'ROSA PARKS', 'JODIE FOSTER', 'BRAD PITT', 'JOAN OF ARC', 'ELVIS PRESLEY', 'JANE AUSTEN', 'CLEOPATRA', 'WALTER CRONKITE', 'ARISTOTLE', 'ISAAC NEWTON', 'BETSY ROSS', 'LEWIS CARROL', 'EDDIE MURPHY', 'HERBERT HOOVER', 'NIKOLA TESLA', 'WHOOPI GOLDBERG', 'WILL SMITH', 'ANDY WARHOL', 'JIMMY STEWART', 'AMELIA EARHART', 'MOHAMMAD ALI', 'THE SUNDANCE KID', 'ZAC EFRON', 'VICTOR HUGO', 'STEVEN SPIELBERG', 'HENRY FORD', 'BILL GATES', 'RICHARD NIXON', 'MICHELANGELO', 'MARK TWAIN', 'JOHANN SEBASTIAN BACH', 'LUCILLE BALL', 'MOTHER TERESA', 'MARY-KATE AND ASHLEY OLSEN', 'BENJAMIN FRANKLIN', 'ALEX RODRIGUEZ', 'CHARLES DARWIN', 'LEONARDO DICAPRIO', 'MARTIN SHEEN', 'STEVE MARTIN', 'ELTON JOHN', 'J.K. ROWLING', 'NAPOLEON BONAPARTE', 'CAMERON DIAZ', 'ELI WHITNEY', 'WOLFGANG AMADEUS MOZART', 'SUSAN B. ANTHONY', 'PABLO PICCASO', 'ULYSSES S. GRANT', 'DANNY GLOVER', 'CARRIE FISHER', 'ALEXANDER GRAHAM BELL', 'REMBRANDT', 'KING GEORGE', 'DWIGHT D. EISENHOWER', 'SIGOURNEY WEAVER', 'OSCAR WILDE', 'TOM CRUISE', 'LEWIS AND CLARK', 'SAMUEL ADAMS', 'MARTIN LUTHER KING, JR.', 'JOHN HANCOCK', 'MICHAEL JORDAN', 'STEVE JOBS', 'BILL COSBY', 'JACKSON POLLOCK', 'CHRISTIAN BALE', 'JOHNNY DEPP', 'KEVIN BACON', 'C. S. LEWIS', 'SHAKESPEARE', 'JONATHAN TAYLOR THOMAS', 'ELIJAH WOOD', 'GENGHIS KHAN', "GEORGIA O'KEEFFE", 'MAHATMA GANDHI', 'THOMAS JEFFERSON', 'SEAN CONNERY', 'FRANKLIN D. ROOSEVELT', 'BARACK OBAMA', 'THOMAS EDISON', 'WILL FERRELL', 'MATTHEW BRODERICK', 'PLATO', 'DR. SEUSS', 'RAPHAEL', 'OPRAH WINFREY', 'SOCRATES', 'HARRIET TUBMAN', 'GALILEO', 'PATRICK HENRY', 'FRANK LLOYD WRIGHT', 'DICK VAN DYKE', 'SALLY RIDE', 'GRACE KELLY', 'BUDDY HOLLY', 'DAVID BECKHAM', 'DREW BARRYMORE', 'STEPHANIE MEYER', 'JAMES TAYLOR', 'GEORGE LUCAS', 'LANCE ARMSTRONG', 'HARRY HOUDINI', 'DIANA, PRINCESS OF WALES', 'AUDREY HEPBURN', 'BUZZ ALDRIN', 'PELÉ', 'NEIL ARMSTRONG', 'POCAHONTAS', 'CHRISTOPHER COLUMBUS', 'LORD BYRON', 'SHEL SILVERSTEIN', 'SAMUEL MORSE', 'MICHAEL PHELPS', 'PEYTON MANNING', 'COPERNICUS', 'QUEEN LATIFAH', 'REESE WITHERSPOON', 'EDGAR ALLEN POE', 'ANNE FRANK', 'SIR ARTHUR CONAN DOYLE', 'ANDY GRIFFITH', 'GEORGE W. CARVER', 'BEETHOVEN', 'AUGUSTUS CAESAR', 'BRUCE WILLIS', "SHAQUILLE O'NEAL", 'MICHAEL JACKSON', 'JAMES EARL JONES', 'NORMAN ROCKWELL', 'FREDERICK DOUGLASS', 'EWAN MCGREGOR', 'MR. ROGERS', 'ERNEST HEMINGWAY', 'LOUIS ARMSTRONG', 'MAGIC JOHNSON', 'CHARLES DICKENS', 'ANDREW LLOYD WEBBER', 'JIM CARREY', 'TONY HAWK', 'PAUL MCCARTNEY', 'CELINE DION', 'MICHAEL J. FOX', 'MANDY MOORE', 'DENZEL WASHINGTON', 'THOMAS PAINE', 'RONALD REGAN', 'WALT DISNEY', 'REGIS PHILBIN', 'THE WRIGHT BROTHERS', 'DAVY CROCKETT', 'JOHN WILLIAMS', 'GEORGE WASHINGTON', 'JUSTIN BEIBER', 'JIM HENSON', 'BABE RUTH', 'JOHN ADAMS', 'BILLY THE KID', 'ABRAHAM LINCOLN']],
    ['SEASONAL', ['FRANKENSTEIN', 'HORROR', 'CANDLE', 'LOLLIPOP', 'AUTUMN', 'JACK-O-LANTERN', 'FORTUNE TELLER', 'VAMPIRE', 'EERIE', 'APPLE CIDER', 'SPELLS', 'GRAVE', 'BOO', 'GYPSY', 'GHOSTBUSTERS', 'TRICK OR TREAT', 'GHOUL', 'CRYPT', 'HAY RIDE', 'SKELETON', 'GHOST', 'COSTUME', 'SPOOKY', 'AFRAID', 'MARSHMALLOW', 'CANDY CORN', 'HAUNTED HOUSE', 'GOBLIN', 'CANDY', 'WITCH', 'SPOOKS', 'FALL', 'IGOR', 'CREEPY', 'GOING TRICK-OR-TREATING', 'GRAVEYARD', 'SPIDER', 'BLACK', 'CORN MAZE', 'GHOST STORY', 'CHOCOLATE', 'MONSTER MASH', 'DOORBELL', 'MONSTER', 'WEREWOLF', 'ORANGE', 'SCARY MOVIES', 'NIGHTTIME', 'GOODY BAG', 'DRACULA', 'SCARECROW', 'BATS', 'FRIGHTENED', 'COFFIN', 'LANTERN', 'ZOMBIE', 'SCARY', 'SECRET LAB', 'DARK', 'PUMPKIN', 'MAD SCIENTIST', 'CHAINS', 'SWEETS', 'PUMPKIN SEEDS', 'SPIDER WEB', 'SNOWBALL FIGHT', 'LIGHTS', 'CHRISTMAS BREAK', 'THE NORTH POLE', 'ELVES', 'SLEDDING', 'THE GRINCH', 'RUDOLPH THE RED-NOSED REINDEER', 'LITTLE SAINT NICK', 'COOKIES', 'SCARF', 'BUDDY THE ELF', "SANTA'S SLEIGH", 'EGGNOG', 'CHRISTMAS EVE', 'GIFTS', 'CHESTNUTS', 'CHRISTMAS CAROL', 'WASSAIL', 'CHRISTMAS SPIRIT', 'THE LITTLE DRUMMER BOY', 'SNOWFLAKE', 'DOLL', 'REINDEER', 'ICE SKATING', 'STAR', 'THE NUTCRACKER', 'GUMDROPS', 'HOT CHOCOLATE', 'SNOWMAN', 'BELLS', 'STABLE', 'GINGERBREAD HOUSE', 'JACK FROST', 'STOCKING', 'PUMPKIN PIE', 'ICICLE', 'MISTLETOE', 'HO HO HO', 'SHEPHERDS', 'ANGEL', 'TOYS', 'MANGER', 'SNOW', 'MITTENS', 'CINNAMON', 'JINGLE BELLS', 'NATIVITY', 'CHRISTMAS TREE', 'SANTA CLAUS', "SANTA'S WORKSHOP", 'DECORATIONS', 'CANDY CANE', 'TURKEY', 'SOUP', 'FROSTY THE SNOWMAN', 'WRAPPING PAPER', 'WISE MEN', 'CHIMNEY', 'SLEIGH RIDE', 'NATIONAL HOLIDAY', 'COLESLAW', 'AMERICAN REVOLUTION', 'SPARKLERS', 'AMERICA', 'SPORTS', 'BALLOONS', 'RED', 'GEORGIA', 'COMMON SENSE', 'INDEPENDENCE', 'POTATO SALAD', 'REPUBLICANISM', 'BENJAMIN FRANKLIN', 'TAXES', 'FAIR', 'SUMMER', 'THIS LAND IS YOUR LAND', 'JUSTICE', 'GOD BLESS AMERICA', 'GAMES', 'JOHN ADAMS', 'LIBERTY', 'STRIPES', 'STATES', 'THE CONSTITUTION', 'STARS AND STRIPES', 'BOSTON', 'PARKS', 'YANKEE DOODLE', 'SOUTH CAROLINA', 'ENGLAND', 'CARNIVAL', 'RED, WHITE, AND BLUE', 'BASEBALL', 'MUSIC', 'FAMILY REUNIONS', 'STREAMERS', "MY COUNTRY 'TIS OF THEE", 'PATRIOTISM', 'BOSTON TEA PARTY', 'INALIENABLE RIGHTS', 'PATRICK HENRY', 'MINUTEMEN', 'MARYLAND', 'HOT DOGS', 'JAMES MADISON', 'CONGRESS', 'EAGLE', 'UNITED', 'NEW HAMPSHIRE', 'THOMAS JEFFERSON', 'STATUE OF LIBERTY', 'HAMBURGERS', 'THOMAS PAINE', 'AMERICA THE BEAUTIFUL', 'SPEECHES', 'WHITE', 'THIRTEEN COLONIES', 'FREEDOM', 'LIBERTY AND JUSTICE FOR ALL', 'BLUE', 'ICE CREAM', 'MASSACHUSETTS', 'FIRECRACKER', 'DEMOCRACY', 'JULY', 'PICNIC', 'INDEPENDENCE DAY', 'NATIONAL ANTHEM', 'GOD BLESS THE U.S.A.', 'ALEXANDER HAMILTON', 'FOUNDING FATHERS', 'PARTY', 'STARS', 'RHODE ISLAND', 'NORTH CAROLINA', 'THE LIBERTY BELL', 'TREATY OF PARIS', 'PRIDE', 'FIREWORKS', 'THE PLEDGE OF ALLEGIANCE', 'FLOATS', 'FUN', 'GEORGE WASHINGTON', 'DECLARATION OF INDEPENDENCE', 'BARBEQUE', 'SODA', "S'MORES", 'DELAWARE', 'LIFE, LIBERTY, AND THE PURSUIT OF HAPPINESS', 'CELEBRATION', 'BAND', 'NEW JERSEY', 'SHOWS', 'BLOCK PARTY', 'REVOLUTIONARY WAR', 'NEW YORK', 'JOHN HANCOCK', 'VIRGINIA', 'ANTHEM', 'CANDY', 'COLONIES', 'BETSY ROSS', 'PARADE', 'FRANCIS SCOTT KEY', "YOU'RE A GRAND OLD FLAG", 'PATRIOT', 'PENNSYLVANIA', 'BONFIRES', 'CONCERTS', 'PIE', 'FAMILY', 'CORN ON THE COB', 'FLAG', 'STAR SPANGLED BANNER', "'1776'", 'WATERMELON', 'TRAVEL', 'CONNECTICUT', 'CHARITY', 'TABLECLOTH', 'EATING', 'PUMPKIN PIE', 'FOOTBALL', 'THANKSGIVING DINNER', 'SQUASH', 'FOOD DRIVES', 'CANDLESTICKS', 'NATIVE AMERICAN', 'SWEET POTATOES', 'TURKEY BOWL', 'GREEN BEAN CASSEROLE', 'NEW ENGLAND', 'SQUANTO', 'ROLLS', 'WINTER SQUASH', 'CORN', 'WATCHING TV', 'THANKS', 'PILGRIMS', 'YAMS', 'PLYMOUTH', 'THURSDAY', 'DUMPLINGS', 'PARADE FLOATS', 'HARVEST', 'TURKEY PARDONING', 'TURKEY', 'COOKING', 'GRAVY', 'PECAN PIE', 'THANKFUL', 'BAKING', 'PARADES', 'HOLIDAY', 'APPLE CIDER', 'CREAMED CORN', 'RESTING', 'TRAVEL', 'VENISON', "MACY'S DAY PARADE", 'GRATEFUL', 'GRATITUDE', 'CRANBERRY', 'PIE', 'REJOICE', 'FESTIVAL', 'PRAISE', 'STUFFING', 'MASHED POTATOES', 'SURVIVE THE WINTER', 'CELEBRATION', 'APPLE PIE', 'TABLE SETTING', 'CORNUCOPIA', 'BLESSINGS', 'SWEET CORN', 'SETTING THE TABLE', 'CRANBERRY SAUCE', 'FOOTBALL GAMES', 'FAMILY', 'HAPPY NEW YEAR', 'WISHES', 'BELLS', 'AULD LANG SYNE', 'MUSIC', 'TIMES SQUARE', 'TELEVISION', 'BONFIRE', 'TOASTS', 'RESOLUTIONS', 'KISS', 'BANK HOLIDAY', 'FIREWORKS', 'PARADE', 'CONFETTI', 'MIDNIGHT', 'FEAST', 'GIFTS', 'PARTIES', 'FOOD', 'CONCERTS', 'GOOD LUCK', 'TWELVE CHIMES', 'CLOCK', 'TRADITIONS', 'JANUARY', 'GRAPES', 'SPARKLERS', 'DECEMBER', "'2013'", 'CELEBRATION', 'SPEECH', 'DANCE/DANCING', 'BALL DROP', 'FATHER TIME', 'I LOVE YOU', 'SNOW', 'KISSES', 'ROMEO', 'HUGS', 'FRIENDSHIP', 'DINNER', 'LACE', 'SWEETHEART', 'DIAMOND', 'MAILBOX', 'LOVE', 'HEART', 'CANDY', 'GIFT', 'CHOCOLATE', 'DOVE', 'CUPID', 'HAPPY', 'COUPLES', 'PINK', 'FEBRUARY', 'FLOWERS', 'ROSE', 'DATE', 'LOLLIPOP', 'SAINT VALENTINE', 'RESTAURANT', 'JEWELRY', 'POEMS', 'RED', 'CARD', 'CATERPILLAR', 'BLOSSOMS', 'FLOWER', 'SEEDS', 'BEES', 'RAINBOW', 'DAFFODIL', 'MUD', 'UMBRELLA', 'GRASSHOPPER', 'DEW', 'TREES', 'APRIL', 'RAIN', 'SPRING BREAK', 'BUTTERFLY', 'PARK', 'GARDEN', 'JUMP ROPE', 'POLLEN', 'WORMS', 'DUCKLING', 'SUN', 'WILDFLOWERS', 'BIRD', 'GREEN', 'KITES', 'BUNNY', 'ROBIN', 'FROG', 'TULIPS', 'BIRD NEST', 'CHICK', 'SUNSHINE', 'LAMB', 'ANTS', 'CRICKETS']],
    ['TRAVEL', ['NEW YORK CITY', 'BINOCULARS', 'SURFBOARD', 'SUMMER', 'FLORIDA', 'JULY', 'ENGLAND', 'SCOTLAND', 'STATE OF LIBERTY', 'THE GRAND CANYON', 'CONDO', 'THE BAHAMAS', 'THE SPHINX', 'THE NILE', 'BROADWAY', 'LAKE', 'ISTANBUL', 'GREECE', 'PORTUGAL', 'AUSTRIA', 'OREGON', 'RIVER', 'FIJI', 'MADAGASCAR', 'CALIFORNIA', 'SOUTH DAKOTA', 'BARBADOS', 'SWITZERLAND', 'SYDNEY', 'JAPAN', 'ROME', 'SUNSCREEN', 'ASIA', 'SCUBA DIVING', 'THE TAJ MAHAL', 'THE LOUVRE', 'EGYPTIAN PYRAMIDS', 'PASSPORT', 'RELAX', 'BOSTON', 'BUCKINGHAM PALACE', 'TURKEY', 'SAN FRANCISCO', 'HONG KONG', 'THE WHITE HOUSE', 'HONOLULU', 'UNIVERSAL STUDIOS', 'BICYCLE', 'SLEEPING BAG', 'CORAL REEF', 'FANNY PACK', 'TOKYO', 'BEACH HOUSE', 'THE MAYAN RUINS', 'LAZY RIVER', 'ARIZONA', 'MAP', 'CANADA', 'PARIS', 'GREAT WALL OF CHINA', 'LAYOVER', 'SIX FLAGS', 'TEXAS', 'NEW ZEALAND', 'LOS ANGELES', 'BIRD WATCHING', 'MOUNTAIN BIKING', 'THE EIFFEL TOWER', 'LUXEMBOURG', 'ISLAND', 'FAMILY REUNION', 'AIRLINE', 'COLORADO', 'HIKING', 'RIVER RAFTING', 'EASTER ISLAND', 'CAMERA', 'SCENERY', 'BERMUDA', 'ORLANDO', 'DISNEYLAND', 'SACRAMENTO', 'BACKPACKING', 'CUSTOMS', 'NIAGARA FALLS', 'RAINFOREST', 'SUNSET', 'SKIING', 'BOARDWALK', 'GALAPAGOS ISLANDS', 'THEME PARK', 'ITALY', 'HOTEL', 'THE COLISEUM', 'ROAD TRIP', 'VACATION DAY', 'BEIJING', 'BARCELONA', 'LONDON', 'SAFARI', 'CAMPING', 'SNOWBOARDING', 'MEDITERRANEAN SEA', 'EUROPE', 'ATLANTIC OCEAN', 'TIME OFF', 'MONEY BELT', 'DELAWARE', 'NATIONAL PARK', 'AUSTRALIA', 'IRELAND', 'SUITCASE', 'THE THAMES', 'LONDON BRIDGE', 'PACIFIC OCEAN', 'FOUR CORNERS', 'BELGIUM', 'MOUNT RUSHMORE', 'YELLOWSTONE', 'SIGHTSEEING', 'SUNGLASSES', 'PACKING', 'WASHINGTON D.C.', 'ARUBA', 'AIRPLANE', 'MAINE', 'SAY CHEESE', 'PARTY', 'SUNSHINE', 'HONEYMOON', 'SHOPPING', 'VENICE', 'STONEHENGE', 'MANHATTAN ISLAND', 'FRANCE', 'HAWAII', 'ANTARCTICA', 'GUAM', 'EGYPT', 'VIENNA', 'MEXICO', 'AIRPORT SECURITY', 'LAS VEGAS', 'TOUR GUIDE', 'AFRICA', 'CARLSBAD CAVERNS', 'BRAZIL', 'RESORT', 'BUG SPRAY', 'ARCTIC OCEAN', 'SUNTAN', 'THE MISSISSIPPI RIVER', 'ALASKA', 'SUNNY WEATHER', 'AMERICA', 'THE GOLDEN GATE BRIDGE', 'JUNE', 'TOURIST', 'CRUISE SHIP', 'MOUNT EVEREST', 'SNOW CONE', 'LUGGAGE', 'SWIMMING POOL', 'WATER PARK', 'THE GREAT BARRIER REEF', 'STROLL', 'FIRST CLASS', 'SPAIN', 'JAMAICA', 'MOVIES', 'COSTA RICA', 'AIRPORT', 'KAYAK', 'HANG GLIDER', 'CANDY', 'CHINA', 'ARE WE THERE YET?', 'MIAMI', 'SOUTH AFRICA', 'NEPAL', 'EMPIRE STATE BUILDING', 'THE DEAD SEA', 'BEACH BALL', 'TRAINS', 'BIG BEN', 'HOLIDAY', 'PUERTO RICO', 'AYERS ROCK', 'THE AMAZON RAINFOREST', 'ATHENS', 'SINGAPORE']],
]);

export default wordLists;