echo "started building"
python -m pip install -r requirements.txt
python manage.py collectstatic --noinput --clear
echo "ended building"