<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use DB;

class QuoteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $row = 0;
        if (($handle = fopen(base_path("public/quotes.csv"), "r")) !== false) {
            while (($data = fgetcsv($handle, 0, ",")) !== false) {
                $row++;
                $createQuery = 'INSERT INTO quotes (description) VALUES ("'.$data[0].'")';
                DB::statement($createQuery, $data);
                $this->command->info($row);
            }
            fclose($handle);
        }
    }
}
