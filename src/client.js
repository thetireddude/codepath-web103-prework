import { createClient } from '@supabase/supabase-js'

const URL = 'https://lbzzwdfjygtlpujyrtmq.supabase.co'
const API_KEY = 'sb_publishable_GCYRgnLR0JdFC1OOtJQrow_Q-Xqe9lB'

export const supabase = createClient(URL, API_KEY)