# Generated by Django 4.1.1 on 2022-10-02 04:33

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Quote',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quote', models.CharField(max_length=255)),
                ('author', models.CharField(max_length=255)),
            ],
        ),
    ]
