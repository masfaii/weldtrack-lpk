create table if not exists materials(
 id uuid primary key default gen_random_uuid(),
 code text,
 name text,
 category text,
 stock integer default 0,
 minimum_stock integer default 0
);

create table if not exists transactions(
 id uuid primary key default gen_random_uuid(),
 material_id uuid,
 type text,
 quantity integer,
 created_at timestamp default now()
);