import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/AddCommentOutline.svg';

export function AddCommentOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="AddCommentOutline">
      <SVG />
    </Icon>
  );
}
