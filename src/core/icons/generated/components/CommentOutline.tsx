import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CommentOutline.svg';

export function CommentOutline(props: TProps) {
  return (
    <Icon {...props} name="CommentOutline">
      <SVG />
    </Icon>
  );
}
