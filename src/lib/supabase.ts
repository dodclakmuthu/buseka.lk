import { createClient } from '@supabase/supabase-js';


// Initialize database client
const supabaseUrl = 'https://bodiuxyvholbmiuehott.databasepad.com';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ijg1OTNhZWMzLWE3ZjQtNDI4OC05MDllLWZmMTM0YTBjNzYzYSJ9.eyJwcm9qZWN0SWQiOiJib2RpdXh5dmhvbGJtaXVlaG90dCIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNzc1NDk4NzQ5LCJleHAiOjIwOTA4NTg3NDksImlzcyI6ImZhbW91cy5kYXRhYmFzZXBhZCIsImF1ZCI6ImZhbW91cy5jbGllbnRzIn0.R7QTuTBGBov_r1GIL_3wyLFS53z-FG1XcAdw_PJi_-o';
const supabase = createClient(supabaseUrl, supabaseKey);


export { supabase };