<?php
namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;

class DashboardController extends ApiController
{
    /**
     * @Route("/dashboard")
     */
    public function getArtifacts()
    {
        return $this->respond([
            [
                'id' => 0,
                'name' => 'The Princess Bride',
                'size' => 999
            ]
        ]);
    }
}