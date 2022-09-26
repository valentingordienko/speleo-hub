import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CommentSolid.svg';

export function CommentSolid(props: TProps) {
  return (
    <Icon {...props} name="CommentSolid">
      <SVG />
    </Icon>
  );
}
