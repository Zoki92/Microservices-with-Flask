import unittest
from project import db
from project.api.models import User
from project.tests.base import BaseTestCase
from sqlalchemy.exc import IntegrityError
from project.tests.utils import add_user


class TestUserModel(BaseTestCase):
    def test_add_user(self):
        user = add_user(username="zoran", email="zoran@123.com", password='greaterthaneight',)
        self.assertTrue(user.id)
        self.assertEqual(user.username, "zoran")
        self.assertEqual(user.email, "zoran@123.com")
        self.assertTrue(user.active)
        self.assertTrue(user.password)

    def test_add_user_duplicate_username(self):
        add_user(username="zoran", email="zoran@123.com", password='greaterthaneight')
        duplicate_user = User(username="zoran", email="zoran2@123.com", password='greaterthaneight')
        db.session.add(duplicate_user)
        self.assertRaises(IntegrityError, db.session.commit)

    def test_add_user_duplicate_email(self):
        add_user(username="zoran", email="zoran@123.com", password='greaterthaneight')
        duplicate_user = User(username="zoran2", email="zoran@123.com", password='greaterthaneight')
        db.session.add(duplicate_user)
        self.assertRaises(IntegrityError, db.session.commit)
        # can also use bellow:
        # with self.assertRaises(IntegrityError):
        #     db.session.commit()

    def test_to_json(self):
        user = add_user(username='justatest', email='test@test.com', password='greaterthaneight')
        self.assertTrue(isinstance(user.to_json(), dict))

    def test_passwords_are_random(self):
        user = add_user(username="zoran", email="zoran@123.com", password='greaterthaneight')
        other_user = add_user(username="zoran1", email="zoran2@123.com", password='greaterthaneight')
        self.assertNotEqual(user.password, other_user.password)

    def test_encode_auth_token(self):
        user = add_user('zoran', 'zoran@123.com', 'test')
        auth_token = user.encode_auth_token(user.id)
        self.assertTrue(isinstance(auth_token, bytes))
        self.assertEqual(User.decode_auth_token(auth_token), user.id)


if __name__ == '__main__':
    unittest.main()
