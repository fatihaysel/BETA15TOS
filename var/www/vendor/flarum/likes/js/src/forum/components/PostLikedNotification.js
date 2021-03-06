import Notification from 'flarum/components/Notification';
import { truncate } from 'flarum/utils/string';

export default class PostLikedNotification extends Notification {
  icon() {
    return 'far fa-thumbs-up';
  }

  href() {
    return app.route.post(this.attrs.notification.subject());
  }

  content() {
    const notification = this.attrs.notification;
    const user = notification.fromUser();

    return app.translator.transChoice('flarum-likes.forum.notifications.post_liked_text', 1, {user});
  }

  excerpt() {
    return truncate(this.attrs.notification.subject().contentPlain(), 200);
  }
}
