// D:\Document\client\client10_senovshop\backend\supabase.js

require('dotenv').config(); // Panggil dotenv dulu
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY; // Using SERVICE_ROLE_KEY is generally for backend operations

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = { supabase };