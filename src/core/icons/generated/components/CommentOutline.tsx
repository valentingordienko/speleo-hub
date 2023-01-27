import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CommentOutline.svg';

export function CommentOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="CommentOutline">
      <SVG />
    </Icon>
  );
}
