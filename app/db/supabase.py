from supabase import create_client, Client
from app.core.config import settings

# Create a single client instance
supabase: Client = create_client(settings.SUPABASE_URL, settings.SUPABASE_KEY)
