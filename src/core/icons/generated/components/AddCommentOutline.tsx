import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/AddCommentOutline.svg';

export function AddCommentOutline(props: TProps) {
  return (
    <Icon {...props} name="AddCommentOutline">
      <SVG />
    </Icon>
  );
}
