<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\UserType;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Security\Core\User\UserInterface;

/**
 * @Route("/api/user")
 */
class UserController extends AbstractController
{
    /**
     * @Route("/getAll", name="user_index", methods={"GET"})
     */
    public function index(UserRepository $userRepository): Response
    {
        $users = $userRepository->findAll();
        $userarray = [];
        foreach ($users as $user){
            $username = $user->getUsername();
            array_push($userarray,$username);
        }        
        return new JsonResponse(['usernames' => $userarray]);
    }

    /**
     * @Route("/new", name="user_new", methods={"GET","POST"})
     * * @return \Symfony\Component\HttpFoundation\JsonResponse
     */
    public function new(Request $request , UserPasswordEncoderInterface $passwordEncoder): Response
    {

        if ($request->isXmlHttpRequest()){
            $user = new User();
            $postData = json_decode($request->getContent());
            $username = $postData->username;
            $email = $postData->email;
            $password = $postData->password;
            $entityManager = $this->getDoctrine()->getManager();
            $user->setUsername($username);
            $user->setEmail($email);
            $user->setPassword($passwordEncoder->encodePassword($user, $password));        
            $entityManager->persist($user);
            $entityManager->flush();
            return new JsonResponse(['message' => 'Votre compte a bien été créé!']);
        }
        else {
            return $this->redirectToRoute('home');
        }
        

        //$form = $this->createForm(UserType::class, $user);
        //$form->handleRequest($request);
        // if ($form->isSubmitted() && $form->isValid()) {
        //     $entityManager = $this->getDoctrine()->getManager();
        //     $user->setPassword(
        //     $passwordEncoder->encodePassword($user, $user->getPassword()));
        //     $entityManager->persist($user);
        //     $entityManager->flush();

        //     return $this->redirectToRoute('user_index');
        // }

        // return $this->render('user/new.html.twig', [
        //     'user' => $user,
        //     'form' => $form->createView(),
        // ]);
    }

    /**
     * @Route("/getUserById", name="user_show", methods={"GET","POST"})
     */
    public function show(Request $request): Response
    {
        $postData = json_decode($request->getContent());
        $id = $postData->id;
        $user = $this->getDoctrine()->getRepository(User::class)->find($id);
        $username = $user->getUsername();
        // $username = $user->getUsername();
        // var_dump($session->get('id'));
        // return new JsonResponse('ok');

        // return $this->render('user/show.html.twig', [
        //     'user' => $user,
        // ]);
        return new JsonResponse($username);
    }

    /**
     * @Route("/{id}/edit", name="user_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, User $user): Response
    {
        $form = $this->createForm(UserType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('user_index');
        }

        return $this->render('user/edit.html.twig', [
            'user' => $user,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/updatePassword", name="update_password")
     */
    public function updatePassword(Request $request , UserRepository $userRepository , UserPasswordEncoderInterface $passwordEncoder )
    {   
        if ($request->isXmlHttpRequest()){
            $postData = json_decode($request->getContent());
            $username = $postData->user;
            $password = $postData->password;
            $entityManager = $this->getDoctrine()->getManager();
            $user = $entityManager->getRepository(User::class)->findOneBy(array('username' =>$username));
            $user->setPassword($passwordEncoder->encodePassword($user, $password));  
            $entityManager->flush();

            return new JsonResponse(['message' => 'Mot de passe mis à jour']);
        }
        else {
            return $this->redirectToRoute('home');
        }
    }

    /**
     * @Route("/{id}", name="user_delete", methods={"POST"})
     */
    public function delete(Request $request, User $user): Response
    {
        if ($this->isCsrfTokenValid('delete'.$user->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($user);
            $entityManager->flush();
        }

        return $this->redirectToRoute('user_index');
    }

}
