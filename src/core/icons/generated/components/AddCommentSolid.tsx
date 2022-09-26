import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/AddCommentSolid.svg';

export function AddCommentSolid(props: TProps) {
  return (
    <Icon {...props} name="AddCommentSolid">
      <SVG />
    </Icon>
  );
}
